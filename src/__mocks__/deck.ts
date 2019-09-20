import { Deck as DeckType } from "../types";

export const deckMock: DeckType = {
  id: "0",
  title: "Test Deck",
  cards: [
    {
      id: "0",
      field: "test field",
      note: "test note"
    },
    {
      id: "1",
      field: "test field 2",
      note: "test note 2"
    }
  ]
};
