import React from 'react';
import styles from './TelephoneInput.module.css';

type TelephoneInputProps = {
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setInputError: (message: string) => void;
}

function TelephoneInput({ value, onChange, setInputError }: TelephoneInputProps): JSX.Element {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const input = event.target.value.trim();
    if (input === "") {
      setInputError("Поле ввода не может быть пустым");
    } else if (!/^\d+$/.test(input)) {
      setInputError("Можно ввести только цифры");
    } else if (input.length < 3 || input.length > 10) {
      setInputError("Введите от 3 до 10 чисел");
    } else {
      setInputError(""); 
    }
    onChange(event);
  };
  
  return (
    <input className={styles.input} type="text" value={value} onChange={handleChange} />
  );
};

export default TelephoneInput;