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

function TelephoneSelector(): JSX.Element {
  const { codeCountries } = countries as CountryData;
  return (
    <select>
       {codeCountries.map((codeCountry: Telephone) => (
        <option key={codeCountry.code} value={codeCountry.code}>
           {codeCountry.flag} {codeCountry.code} {" "} {codeCountry.countryName}
        </option>
      ))}
    </select>
  );
};

export default TelephoneSelector;