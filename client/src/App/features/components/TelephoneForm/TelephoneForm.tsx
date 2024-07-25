import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import type { Telephone } from "../../actions/telephoneTypes";
import { addTelephone } from "../../actions/telephoneAction";
import TelephoneSelector from "../../Ui/selector/TelephoneSelector";
import TelephoneInput from "../../Ui/input/TelephoneInput";
import TelephoneButton from "../../Ui/button/TelephoneButton";
import countries from "../../config/codeCountries.json";
import { useAppDispatch } from "../../store/store";
import styles from "./TelephoneForm.module.css";

const socket = io("http://localhost:4000");
function TelephoneForm(): JSX.Element {
  const [inputError, setInputError] = useState<string>("");
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
      return;
    }
    const selectedCountry: Telephone | undefined = countries.codeCountries.find(
      (country: Telephone) => country.code === selectedCodeCountry
    );

    if (!number) {
      setInputError("Поле ввода не может быть пустым");
      return;
    }

    const newTelephone: Telephone = {
      code: selectedCountry.code,
      number,
      countryName: selectedCountry.countryName,
      flag: selectedCountry.flag,
    };

    try {
      socket.emit("message", newTelephone);
      setTelephoneNumber("");
      setInputError("");
    } catch (error) {
      setInputError("Ошибка при отправке данных");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>Введите номер телефона</label>
      <div className={styles.divider}>
        <TelephoneSelector
          value={selectedCodeCountry}
          onChange={e => setSelectedCodeCountry(e.target.value)}
        />
        <TelephoneInput
          value={number}
          onChange={e => setTelephoneNumber(e.target.value)}
          setInputError={setInputError}
        />
      </div>
      <TelephoneButton />
      <div className={styles.error} >
        {inputError}
      </div>
    </form>
  );
}

export default TelephoneForm;
