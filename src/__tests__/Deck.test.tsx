import React from "react";
import { shallow } from "enzyme";
import { Deck } from "../Deck";
import { deckMock } from "../__mocks__/deck";

describe("Deck component", () => {
  describe("when prop 'deck' is null", () => {
    const wrapper = shallow(<Deck deck={null} />);

    it("renders a block with text 'No Data'", () => {
      const text = wrapper
        .find("WithTheme(Box)")
        .children()
        .text();

      expect(text).toEqual("No Data");
    });
  });
  describe("when prop 'deck' is data", () => {
    const wrapper = shallow(<Deck deck={deckMock} />);

    it("renders a title of deck", () => {
      const title = wrapper.find("h3");
      expect(title.text()).toEqual(deckMock.title);
    });

    it("renders the true count of cards", () => {
      const cards = wrapper.find("CardView");
      expect(cards).toHaveLength(deckMock.cards.length);
    });

    it("renders a link to home route", () => {
      expect(wrapper.find("NavLink").exists()).toBeTruthy();
    });
  });
});
