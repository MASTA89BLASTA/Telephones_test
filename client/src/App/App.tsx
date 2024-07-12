import React from "react";
import TelephoneForm from "./features/components/TelephoneForm/TelephoneForm";



function App(): JSX.Element {
  return (
    <div className="telephone__wrapper">
      <h1>Telephones</h1>
      <TelephoneForm/>
    </div>
  );
}

export default App;