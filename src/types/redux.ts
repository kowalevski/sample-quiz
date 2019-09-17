import { Deck } from "./memorize";

export type DeckStore = Deck | {};

export type RootStore = {
  deck: DeckStore;
};
