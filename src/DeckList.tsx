import React from "react";
import { Box } from "grommet";
import decks from "./data/decks.json";

class DeckList extends React.Component {
  render() {
    return (
      <div>
        <h3>Decks</h3>
        {decks.map(deck => (
          <Box
            background="dark-2"
            margin="xsmall"
            pad="xsmall"
            justify="between"
            direction="row"
          >
            <span>{deck.title}</span>
            <Box margin="xsmall" background="brand">
              123
            </Box>
          </Box>
        ))}
      </div>
    );
  }
}

export default DeckList;
