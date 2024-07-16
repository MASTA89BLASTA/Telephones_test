import React, { useState } from "react";
import { addTelephone } from "../../actions/telephoneAction";
import TelephoneSelector from "../../Ui/selector/TelephoneSelector";
import TelephoneInput from "../../Ui/input/TelephoneInput";
import TelephoneButton from "../../Ui/button/TelephoneButton";
import countries from "../../config/codeCountries.json"; 
import { useAppDispatch } from "../../store/store";

type Country = {
  code: string;
  countryName: string;
  flag: string;
};

function TelephoneForm(): JSX.Element {
  const [errorMessage, setErrorMessage] = useState<string>("");
  
  const [selectedCodeCountry, setSelectedCodeCountry] = useState<string>(countries.codeCountries[1].code);
  const [number, setTelephoneNumber] = useState<string>("");
  const dispatch = useAppDispatch();


  const handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    if (!number) {
      setErrorMessage("Поле ввода не может быть пустым");
      return;
    }
    const selectedCountry: Country | undefined = countries.codeCountries.find((country:Country) => country.code === selectedCodeCountry);
    
    dispatch(addTelephone({
      code: selectedCountry.code,
      number,
      countryName: selectedCountry.countryName,
      flag: selectedCountry.flag
    }));
    console.log("Submitted:", selectedCodeCountry, number);


    
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
