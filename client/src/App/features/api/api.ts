/* eslint-disable import/prefer-default-export */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import type { Telephone } from "../actions/telephoneTypes";

export const loadTelephones = async (): Promise<Telephone[]> => {
  try {
    const response = await fetch("http://localhost:4000/api/telephones", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // credentials: "include",
    });
    if (!response.ok) {
      throw new Error("Сетевая ошибка: ответ не соответствует");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Ошибка загрузки данных:", error);
    throw error;
  }
};