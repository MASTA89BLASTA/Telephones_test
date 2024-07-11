import { ADD_TELEPHONE, GET_TELEPHONES } from "./telephoneTypes";

export const addTelephone = (payload) => ({
  type: ADD_TELEPHONE,
  payload
});

export const getTelephones = (payload) => ({
  type: GET_TELEPHONES,
  payload
});