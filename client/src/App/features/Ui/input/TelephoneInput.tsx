import React, { useState } from 'react';

type TelephoneInputProps = {
  value: string,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setErrorMessage: (message: string) => void;
}

function TelephoneInput({ value, onChange, setErrorMessage }: TelephoneInputProps): JSX.Element {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const input = event.target.value.trim();
    let error = "";
    if (!input) {
      error = "Поле ввода не может быть пустым";
    } else if (!/^\d+$/.test(input)) {
      error = "Можно ввести только цифры";
    } else if (input.length < 3 || input.length > 10) {
      error = "Введите от 3 до 10 чисел";
    } 
    setErrorMessage(error);
    onChange(event);
  };
  return (
    <input type="text" value={value} onChange={handleChange} />
  );
};

export default TelephoneInput;