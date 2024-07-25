import React from "react";
import styles from "./TelephoneButton.module.css";

function TelephoneButton(): JSX.Element {
  return (
    <button className={styles.button} type="submit">
      Добавить номер
    </button>
  );
}

export default TelephoneButton;
