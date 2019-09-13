import React from "react";
import { mount } from "enzyme";
import Note from "./Note";

const testText = "test text";
const props = {
  note: {
    text: testText
  }
};

describe("Note component", () => {
  let wrapper = mount(<Note {...props} />);

  it("renders the text of note", () => {
    expect(wrapper.find("p").text()).toEqual(testText);
  });
});
