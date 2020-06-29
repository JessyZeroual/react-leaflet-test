import React from "react";
import TestRenderer from "react-test-renderer";
import { act } from "react-test-renderer";
import fetchMock from "fetch-mock";

import App from "../App";
import Map from "../components/Map/Map";
import cities from "./listOfCitiesTests";

jest.mock("leaflet");
const elementMock = {
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
};
jest.spyOn(document, "getElementById").mockImplementation(() => elementMock);

describe("App", () => {
  let renderer;
  beforeEach(async () => {
    await act(async () => {
      renderer = TestRenderer.create(<App />);
      fetchMock.get("/cities.json", cities, { overwriteRoutes: true });
    });
  });

  describe("When App is mounted", () => {
    it("renders correctly", () => {
      expect(renderer).toMatchSnapshot();
    });

    it("Pass the props currentCity to the component Map", () => {
      expect(renderer.root.findByType(Map).props.currentCity).toEqual({
        city: "New York",
        growth_from_2000_to_2013: 4.8,
        latitude: 40.7127837,
        longitude: -74.0059413,
        population: 8405837,
        rank: 1,
        state: "New York",
      });
    });
  });

  describe("When we click on a city", () => {
    it("Pass the new props currentCity to the component Map", async () => {
      await act(async () => {
        const button = renderer.toJSON().children[0].children[1].children[1];
        button.props.onClick();
      });

      expect(renderer.root.findByType(Map).props.currentCity).toEqual({
        city: "Los Angeles",
        growth_from_2000_to_2013: 4.8,
        latitude: 34.0522342,
        longitude: -118.2436849,
        population: 3884307,
        rank: 2,
        state: "California",
      });
    });
  });
});
