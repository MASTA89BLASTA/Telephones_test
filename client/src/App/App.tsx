import React from "react";
import TelephoneForm from "./features/components/TelephoneForm/TelephoneForm";
import TelephoneList from "./features/components/TelephoneList/TelephoneList";
import styles from "./App.module.css";



function App(): JSX.Element {
  return (
    <div className={styles.App}>
      <h1>Telephones</h1>
      <TelephoneForm />
      <TelephoneList />
    </div>
  );
}

export default App;