import { shallow } from "enzyme";
import React from "react";
import App from "./App";

describe("<App />", () => {
  it("App renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });
  // it("App renders a 'div' with the class App-header", () => {
  //   const wrapper = shallow(<App />);
  //   wrapper.update();
  //   expect(wrapper.find("div.App-header")).toHaveLength(1);
  // });
  // it("App renders a div with the class App-body", () => {
  //   const wrapper = shallow(<App />);
  //   wrapper.update();
  //   expect(wrapper.find("div.App-body")).toHaveLength(1);
  // });
  // it("App renders a div with the class App-footer", () => {
  //   const wrapper = shallow(<App />);
  //   wrapper.update();
  //   expect(wrapper.find("div.App-footer")).toHaveLength(1);
  // });
});
