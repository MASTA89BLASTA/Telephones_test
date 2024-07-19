import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import type { Telephone } from "../../actions/telephoneTypes";
import { addTelephone } from "../../actions/telephoneAction";
import TelephoneSelector from "../../Ui/selector/TelephoneSelector";
import TelephoneInput from "../../Ui/input/TelephoneInput";
import TelephoneButton from "../../Ui/button/TelephoneButton";
import countries from "../../config/codeCountries.json";
import { useAppDispatch } from "../../store/store";

const socket = io("http://localhost:4000");
function TelephoneForm(): JSX.Element {
  const [inputError, setErrorMessage] = useState<string>("");
  const [selectedCodeCountry, setSelectedCodeCountry] = useState<string>(
    countries.codeCountries[1].code
  );
  const [number, setTelephoneNumber] = useState<string>("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleNewTelephone = (newTelephone: Telephone): void => {
      console.log("Received new telephone:", newTelephone);
      dispatch(addTelephone(newTelephone));
    };
    socket.on("message", handleNewTelephone);

    return () => {
      socket.off("message", handleNewTelephone);
    };
  }, [dispatch]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async event => {
    event.preventDefault();
    if (inputError) {
      setErrorMessage(inputError);
      return;
    }
    const selectedCountry: Telephone | undefined = countries.codeCountries.find(
      (country: Telephone) => country.code === selectedCodeCountry
    );

    const newTelephone: Telephone = {
      code: selectedCountry.code,
      number,
      countryName: selectedCountry.countryName,
      flag: selectedCountry.flag,
    };

    try {
      socket.emit("message", newTelephone);
      setTelephoneNumber("");
      setErrorMessage("");
    } catch (error) {
      setErrorMessage("Ошибка при отправке данных");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <TelephoneSelector
        value={selectedCodeCountry}
        onChange={e => setSelectedCodeCountry(e.target.value)}
      />
      <TelephoneInput
        value={number}
        onChange={e => setTelephoneNumber(e.target.value)}
        setErrorMessage={setErrorMessage}
      />
      <TelephoneButton />
      <div className="" style={{ color: "red" }}>
        {inputError}
      </div>
    </form>
  );
}

export default TelephoneForm;
