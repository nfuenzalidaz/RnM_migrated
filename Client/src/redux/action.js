import {
  GET_CHARACTER,
  CLOSE_CHARACTER,
  GET_DETAILS,
  CLEAR_DETAILS,
  ADD_FAV,
  REMOVE_FAV
} from "./action-type";
import axios from "axios";

export const getCharacter = (id) => {
  return (dispatch) => {
    try {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((data) => dispatch({ type: GET_CHARACTER, payload: data }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const closeCharacter = (id) => {
  return { type: CLOSE_CHARACTER, payload: id };
};

export const getDetails = (id) => {
  return (dispatch) => {
    try {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => response.json())
        .then((data) => dispatch({ type: GET_DETAILS, payload: data }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const clearDetails = () => {
  return { type: CLEAR_DETAILS };
};

export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return (dispatch) => {
    axios.post(endpoint, character).then(({ data }) => {
      return dispatch({
        type: ADD_FAV,
        payload: data,
      });
    });
  };
};

export const removeFav = (id) => {
  const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    });
  };
};
