import type TelephoneAction from "../../actions/telephoneAction";
import type TelephoneState from "../../actions/telephoneState";


export const initState: TelephoneState = {
  telephoneList: []
}

// eslint-disable-next-line @typescript-eslint/default-param-last
function reducer( state: TelephoneState = initState, action: TelephoneAction,): TelephoneState {
  switch(action.type) {
    case "GET_TELEPHONES":
      return {
        ...state,
        telephoneList: action.payload
      }
    case "ADD_TELEPHONE": 
      return {
        ...state,
        telephoneList: [...state.telephoneList, action.payload]
      }  
    default: {
      return state;
    }  
  }
}

export default reducer;