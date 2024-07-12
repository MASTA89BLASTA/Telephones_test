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

export default TelephoneAction;