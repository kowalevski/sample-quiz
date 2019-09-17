import { combineReducers } from "redux";
import {} from "react-redux";
import { SET_DECK, SetDeckAction } from "../actions/actionTypes";
import { DeckStore, RootStore } from "../types";

const deckReducer = (state: DeckStore = {}, action: SetDeckAction) => {
  switch (action.type) {
    case SET_DECK:
      return action.payload;
    default:
      return state;
  }
};

export const getDeck = (state: RootStore) => state.deck;

export default combineReducers({
  deck: deckReducer
});
