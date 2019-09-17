import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Box } from "grommet";
import decks from "./data/decks.json";
import { setDeck, SetDeckActionCreator } from "./actions";
import { Deck } from "./types";

type DispatchProps = {
  setDeck: SetDeckActionCreator;
};

type Props = {} & DispatchProps;

class DeckList extends React.Component<Props> {
  handleLinkClick = (deck: Deck) => this.props.setDeck(deck);

  render() {
    return (
      <div>
        <h3>Decks</h3>
        {decks.map(deck => (
          <Box
            key={deck.id}
            background="dark-2"
            margin="xsmall"
            pad="xsmall"
            justify="between"
            direction="row"
          >
            <Link
              to="/deck"
              key={deck.id}
              onClick={() => this.handleLinkClick(deck)}
            >
              <span>{deck.title}</span>
            </Link>
            <Box margin="xsmall" background="brand">
              123
            </Box>
          </Box>
        ))}
      </div>
    );
  }
}

export default connect(
  null,
  {
    setDeck
  }
)(DeckList);
