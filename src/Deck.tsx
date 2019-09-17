import React from "react";
import NavLink from "./NavLink";

const Deck: React.FC = () => {
  return (
    <div>
      <h3>deck</h3>
      <NavLink to="/memorize" label="🤔 Memorize" />
    </div>
  );
};

export default Deck;
