/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { useState } from "react";
// import io from "socket.io-client";
import { Telephone } from "../../actions/telephoneTypes";
import { addTelephone } from "../../actions/telephoneAction";
import TelephoneSelector from "../../Ui/selector/TelephoneSelector";
import TelephoneInput from "../../Ui/input/TelephoneInput";
import TelephoneButton from "../../Ui/button/TelephoneButton";
import countries from "../../config/codeCountries.json";
import { useAppDispatch } from "../../store/store";


function TelephoneForm(): JSX.Element {
  const [errorMessage, setErrorMessage] = useState<string>("");
  
  const [selectedCodeCountry, setSelectedCodeCountry] = useState<string>(countries.codeCountries[1].code);
  const [number, setTelephoneNumber] = useState<string>("");
  const dispatch = useAppDispatch();


  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault();
    if (!number) {
      setErrorMessage("Поле ввода не может быть пустым");
      return;
    }
    const selectedCountry: Telephone | undefined = countries.codeCountries.find(
      (country: Telephone) => country.code === selectedCodeCountry
    );
    
    const newTelephone: Telephone = {
      code: selectedCountry.code,
      number,
      countryName: selectedCountry.countryName,
      flag: selectedCountry.flag
    };

    try {
      const response = await fetch("http://localhost:4000/api/telephones", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newTelephone)
      });
      
      const data = await response.json();
      console.log(data, `erser`)
      dispatch(addTelephone(data));
      setTelephoneNumber("");
      setErrorMessage(""); 
      console.log("Submitted:", selectedCodeCountry, number);
    } catch (error) {
      console.error("Error submitting telephone:", error);
      setErrorMessage("Error submitting telephone");
    }
    
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <TelephoneSelector
        value={selectedCodeCountry}
        onChange={e => setSelectedCodeCountry(e.target.value)}
      />
      <TelephoneInput value={number} onChange={e => setTelephoneNumber(e.target.value)} setErrorMessage={setErrorMessage}/>
      <TelephoneButton />
      <div className="" style={{ color: 'red' }}>{errorMessage}</div>
    </form>
    
  );
}

export default TelephoneForm;

// const socket = io("http://localhost:4000", {
//   transports: ["websocket", "polling"],
//   withCredentials: true, 
// });

// function TelephoneForm(): JSX.Element {
//   const [errorMessage, setErrorMessage] = useState<string>("");
//   const { codeCountries } = countries;
//   const [selectedCodeCountry, setSelectedCodeCountry] = useState<string>(
//     codeCountries[1].code
//   );
//   const [number, setTelephoneNumber] = useState<string>("");
//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     socket.on("message", newTelephone => {
//       dispatch(addTelephone(newTelephone));
//     });
//   });
//   const handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
//     event.preventDefault();
//     if (!number) {
//       setErrorMessage("Поле ввода не может быть пустым");
//       return;
//     }
//     const selectedCountry: Telephone | undefined = codeCountries.find(
//       (country: Telephone) => country.code === selectedCodeCountry
//     );
//     socket.emit("message", {
//       code: selectedCountry?.code,
//       number,
//       countryName: selectedCountry?.countryName,
//       flag: selectedCountry?.flag,
//     });
//     setTelephoneNumber("");

//     console.log("Submitted:", selectedCodeCountry, number);
//   };
//   return (
//     <form className="form" onSubmit={handleSubmit}>
//       <TelephoneSelector
//         value={selectedCodeCountry}
//         onChange={e => setSelectedCodeCountry(e.target.value)}
//       />
//       <TelephoneInput
//         value={number}
//         onChange={e => setTelephoneNumber(e.target.value)}
//         setErrorMessage={setErrorMessage}
//       />
//       <TelephoneButton />
//       <div className="" style={{ color: "red" }}>
//         {errorMessage}
//       </div>
//     </form>
//   );
// }

// export default TelephoneForm;
