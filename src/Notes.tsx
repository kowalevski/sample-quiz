import React from "react";
import ControlPanel from "./ControlPanel";
import NavLink from "./NavLink";

const Notes: React.FC = () => (
  <>
    <h1>Simple Notes</h1>
    <ControlPanel />
    <br />
    <NavLink to="/" label="🏠 Home" />
  </>
);

export default Notes;
