import React from "react";

import { BoardListCard } from "../board.list.card";
import { shallow } from "enzyme";

describe("BoardListCard props testcase", () => {

  it("all props checked", () => {
    var wrapper = shallow(<BoardListCard />);
    var divElement = wrapper.find('div')
    expect(divElement.text()).toEqual('')
  });
  
});
