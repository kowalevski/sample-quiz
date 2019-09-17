import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Grommet, Box } from "grommet";
import Home from "./Home";
import Notes from "./Notes";
import Memorize from "./Memorize";

import "./App.css";

const App: React.FC = () => (
  <Grommet full={true}>
    <Box fill={true} background="dark-1" align="center" justify="center">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/notes" component={Notes} />
        <Route path="/memorize" component={Memorize} />
      </Switch>
    </Box>
  </Grommet>
);

export default App;
