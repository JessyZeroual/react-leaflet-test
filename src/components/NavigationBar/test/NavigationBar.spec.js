import React from "react";
import TestRenderer from "react-test-renderer";
import NavigationBar from "../NavigationBar";
import { StyledMainNavigationBar } from "../NavigationBar.styled";

jest.mock("../../CityList/CityList", () => () => <div></div>);
jest.mock("../../FilterCities/FilterCities", () => () => <div></div>);

describe("NavigationBar", () => {
  let renderer;

  beforeEach(() => {
    renderer = TestRenderer.create(<NavigationBar />);
  });

  describe("When NavigationBar is mounted", () => {
    it("renders correctly", () => {
      expect(renderer).toMatchSnapshot();
    });

    it("has a StyledMainNavigationBar component with an id named mainSideBarID", () => {
      expect(
        renderer.root.findByType(StyledMainNavigationBar).props.id
      ).toEqual("mainSideBarID");
    });
  });
});
