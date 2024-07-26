import React from 'react';
import styles from './TelephoneItem.module.css';

type TelephoneItemProps = {
  number: string;
  index: number;
  code: string;
  countryName: string;
  flag: string;
}

function TelephoneItem ({ number, index, code, countryName, flag }:TelephoneItemProps): JSX.Element {
  return (
    <li className={styles.item}>
      <span className={styles.index}>{index} </span>
      <span className={styles.number}>{`${code} (${number.slice(0, 3)}) ${number.slice(3)}`}</span>
      <span className={styles.country}>{countryName}</span>
      <span className={styles.flag}>{flag}</span>
    </li>
  );
};

export default TelephoneItem;