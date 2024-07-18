import React, { useState } from 'react';

type TelephoneInputProps = {
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setErrorMessage: (message: string) => void;
}

function TelephoneInput({ value, onChange, setErrorMessage }: TelephoneInputProps): JSX.Element {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const input = event.target.value.trim();
    if (input === "") {
      setErrorMessage("Поле ввода не может быть пустым");
    } else if (!/^\d+$/.test(input)) {
      setErrorMessage("Можно ввести только цифры");
    } else if (input.length < 3 || input.length > 10) {
      setErrorMessage("Введите от 3 до 10 чисел");
    } else {
      setErrorMessage(""); 
    }
    onChange(event);
  };
  return (
    <input type="text" value={value} onChange={handleChange} />
  );
};

export default TelephoneInput;