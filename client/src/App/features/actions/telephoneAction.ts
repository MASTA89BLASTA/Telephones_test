import type { Telephone } from "./telephoneTypes";

type TelephoneAction =
  | {
      type: "GET_TELEPHONES";
      payload: Telephone[];
    }
  | {
      type: "ADD_TELEPHONE";
      payload: Telephone;
    };

export const addTelephone = (telephone: Telephone): { type: string; payload: Telephone } => ({
  type: "ADD_TELEPHONE",
  payload: telephone,
});

export const getTelephones = (telephones: Telephone[]): {type: string, payload: Telephone[]} => ({
  type: "GET_TELEPHONES",
  payload: telephones,
});

export default TelephoneAction;
