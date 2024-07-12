import TelephoneSelector from "App/features/Ui/selector/TelephoneSelector";
import React from "react";

function TelephoneForm(): JSX.Element {
  return (
    <form className="form">
      <TelephoneSelector/>
    </form>
  );  
}

export default TelephoneForm;
