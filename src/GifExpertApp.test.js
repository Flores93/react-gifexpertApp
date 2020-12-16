import React from "react";
import { shallow } from "enzyme";

import GifExpertApp from "./GifExpertApp";

describe("GifExpertApp tests", () => {
  //Arrange
  let component = shallow(<GifExpertApp />);

  beforeEach(() => {
    component = shallow(<GifExpertApp />);
  });

  test("should show GifExpertApp correctly", () => {
    expect(component).toMatchSnapshot();
  });

  test("should show 'GifExpertApp' inside H2 tag", () => {
    //Act
    const h2Value = component.find("h2").text().trim();

    //Assert
    expect(h2Value).toBe("GifExpertApp");
  });

  //   test("should add a new element in the categories array", () => {
  //     //Act
  //     component.find("button").at(0).simulate("click");

  //     const arr = component.find("li");
  //     console.log(arr.length);

  //     //Assert
  //     expect(arr.length).toBe(4);
  //   });
});
