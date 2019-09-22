import { SET_DECK, LOAD_DECKS, ADD_DECK } from "../actionTypes";
import { setDeck, loadDecks, addDeck } from "../index";
import { deckMock } from "../../__mocks__/deck";

describe("action creators", () => {
  it("creates action to set the deck", () => {
    const expectedAction = {
      type: SET_DECK,
      payload: deckMock
    };

    expect(setDeck(deckMock)).toEqual(expectedAction);
  });
});
