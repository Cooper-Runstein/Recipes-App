import * as React from "react";

import { shallow } from "enzyme";

import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("expect component to render", () => {
    const wrapper = shallow(<SearchBar />);
  });
});
