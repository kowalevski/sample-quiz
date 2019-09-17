import { Deck } from "../types";
export const SET_DECK = "SET_DECK";

export type SetDeckAction = {
  type: typeof SET_DECK;
  payload: Deck;
};
