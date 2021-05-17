import React from "react";

import { ProjectList } from "../project.list";
import { shallow } from "enzyme";

describe("ProjectList props testcase", () => {
  it("all props checked", () => {
    var wrapper = shallow(<ProjectList />);
    var divElement = wrapper.find("div");
    expect(divElement.text()).toEqual("");
  });
});
