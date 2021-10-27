import { types } from "./types";
const initialState = {
  mainData: {},
  subData:{}
};
export const rootState = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DATA:
      return {
        ...state,
        [action.label]: action.payload,
      };
    default:
      return state;
  }
};
