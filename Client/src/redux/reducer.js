import {
  GET_CHARACTER,
  CLOSE_CHARACTER,
  GET_DETAILS,
  CLEAR_DETAILS,
} from "./action-type";

const initialState = {
  characters: [],
  favCharacters: [],
  charDetails: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTER:
      const char = state.characters.filter(
        (char) => char.id === Number(action.payload.id)
      );
      if (char.length === 0) {
        return {
          ...state,
          characters: [...state.characters, action.payload],
        };
      } else {
        return {
          ...state,
        };
      }

    case CLOSE_CHARACTER:
      const close = state.characters.filter(
        (char) => char.id !== Number(action.payload)
      );
      return {
        ...state,
        characters: close,
      };

    case GET_DETAILS:
      return {
        ...state,
        charDetails: action.payload,
      };

    case CLEAR_DETAILS:
      return {
        ...state,
        charDetails: {},
      };

    // case "ADD_FAV":
    //   return { ...state, myFavorites: payload, allCharacters: payload };

    // case 'REMOVE_FAV':
    //   return { ...state, myFavorites: payload };

    default:
      return { ...state };
  }
};

export default reducer;
