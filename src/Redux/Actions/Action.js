import { ADD_ITEM, DELETE_ITEM, GET_ITEM } from "./ActionTypes";
export const addItem = (movie) => {
  return {
    type: ADD_ITEM,
    payload: movie
  };
};
export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    payload: id
  };
};
export const getItem = (id) => {
  return {
    type: GET_ITEM,
    payload: id
  };
};
