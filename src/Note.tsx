import React from "react";
import { Box } from "grommet";
import { NoteType } from "./types";

type Props = {
  note: NoteType;
};

const Note: React.FC<Props> = ({ note }) => (
  <Box pad="small" background="dark-3" margin="xsmall" animation="slideUp">
    <p>{note.text}</p>
  </Box>
);

export default Note;
