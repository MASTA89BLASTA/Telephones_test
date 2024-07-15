import React, { useState } from "react";

import TelephoneSelector from "../../Ui/selector/TelephoneSelector";
import TelephoneInput from "../../Ui/input/TelephoneInput";
import TelephoneButton from "../../Ui/button/TelephoneButton";

function TelephoneForm(): JSX.Element {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [selectedCodeCountry, setSelectedCodeCountry] = useState<string>("");
  const [number, setTelephoneNumber] = useState<string>("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    if (!number) {
      setErrorMessage("Поле ввода не может быть пустым");
      return;
    }
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
