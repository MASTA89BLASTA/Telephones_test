import React from 'react';
import type { Telephone } from "../../actions/telephoneTypes";
import countries from "../../config/codeCountries.json";
import styles from "./TelephoneSelector.module.css";

type TelephoneSelectorProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

function TelephoneSelector({ value, onChange }: TelephoneSelectorProps): JSX.Element {
  const { codeCountries } = countries as { codeCountries: Telephone[] };

  return (
    <select className={styles.selector} value={value} onChange={onChange}>
       {codeCountries.map((codeCountry: Telephone) => (
        <option key={codeCountry.code} value={codeCountry.code}>
           {codeCountry.flag} {codeCountry.code} 
        </option>
      ))}
    </select>
  );
};

export default TelephoneSelector;