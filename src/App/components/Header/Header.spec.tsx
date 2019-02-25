import { shallow } from "enzyme";
import * as React from "react";

import Header from "./Header";

describe("header", () => {
  test("it renders", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toBeTruthy();
  });
});
