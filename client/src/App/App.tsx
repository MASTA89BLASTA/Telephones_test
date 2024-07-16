import React from "react";
import TelephoneForm from "./features/components/TelephoneForm/TelephoneForm";
import TelephoneList from "./features/components/TelephoneList/TelephoneList";



function App(): JSX.Element {
  return (
    <div className="telephone__wrapper">
      <h1>Telephones</h1>
      <TelephoneForm />
      <TelephoneList />
    </div>
  );
}

export default App;