import React from "react";
import { Box } from "grommet";
import NavLink from "./NavLink";

const Home: React.FC = () => (
  <Box direction="column">
    <NavLink to="/notes" label="📝 Notes" />
    <NavLink to="/memorize" label="🤔 Memorize" />
  </Box>
);

export default Home;
