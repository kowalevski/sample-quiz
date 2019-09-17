import { SET_DECK } from "./actionTypes";
import { Deck } from "../types";

export const setDeck = (payload: Deck) => ({
  type: SET_DECK,
  payload
});
