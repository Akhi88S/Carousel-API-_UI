import { types } from "../reducers/types";
import axios from "axios";

let URL = `https://anapioficeandfire.com/api`;

export const getMainData = () => {
  return (dispatch) => {
    axios
      .get(`${URL}`)
      .then((response) => {
        if (response.data) {
          let responseData = response.data;
          dispatch({
            type: types.GET_DATA,
            payload: responseData,
            label: "mainData",
          });
        }
      })
      .catch((error) => {});
  };
};

const getUrl=(value)=>{
  switch(value){
    case "books":
      return `/${value}`;
    case "characters":
      return `/${value}`;
      case 'povCharacters':
      return `/characters`
      case 'swornMembers':
        return '/characters'
    case "allegiances":
      return `/houses`;
      case "houses":
        return `/houses`;
    default:
      return `/data/characters/583`;
  }
}
export const getsubData = (value, id) => {
  return (dispatch) => {
    axios
      .get(`${URL}${getUrl(value)}/${id}`)
      .then((response) => {
        if (response.data) {
          let responseData = response.data;
          dispatch({
            type: types.GET_DATA,
            payload: responseData,
            label: "subData",
          });
        }
      })
      .catch((error) => {});
  };
};
