import React from 'react';
import type { Telephone } from "../../actions/telephoneTypes";
import countries from "../../config/codeCountries.json";


type CountryData = {
  codeCountries: {
    code: string;
    countryName: string;
    flag: string;
  }[];
};

type TelephoneSelectorProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

function TelephoneSelector({ value, onChange }: TelephoneSelectorProps): JSX.Element {
  const { codeCountries } = countries as CountryData;
  return (
    <select value={value} onChange={onChange}>
       {codeCountries.map((codeCountry: Telephone) => (
        <option key={codeCountry.code} value={codeCountry.code}>
           {codeCountry.flag} {codeCountry.code} {" "} {codeCountry.countryName}
        </option>
      ))}
    </select>
  );
};

export default TelephoneSelector;