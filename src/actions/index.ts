import { SET_DECK } from "./actionTypes";
import { Deck } from "../types";
import { SetDeckAction } from "./actionTypes";

export type SetDeckActionCreator = (payload: Deck) => SetDeckAction;

export const setDeck: SetDeckActionCreator = payload => ({
  type: SET_DECK,
  payload
});
