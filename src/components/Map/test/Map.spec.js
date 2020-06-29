import React from "react";
import TestRenderer from "react-test-renderer";
import Map from "../Map";
jest.mock("leaflet");

describe("Map", () => {
  let renderer;

  beforeEach(() => {
    renderer = TestRenderer.create(
      <Map
        currentCity={{
          city: "New York",
          growth_from_2000_to_2013: 4.8,
          latitude: 40.7127837,
          longitude: -74.0059413,
          population: 8405837,
          rank: 1,
          state: "New York",
        }}
      />
    );
  });

  describe("When Map is mounted", () => {
    it("renders correctly", () => {
      expect(renderer).toMatchSnapshot();
    });

    it("receives correct properties", () => {
      const { currentCity } = renderer.root.findByType(Map).props;

      expect(typeof currentCity.city).toEqual("string");
      expect(typeof currentCity.growth_from_2000_to_2013).toEqual("number");
      expect(typeof currentCity.latitude).toEqual("number");
      expect(typeof currentCity.longitude).toEqual("number");
      expect(typeof currentCity.population).toEqual("number");
      expect(typeof currentCity.rank).toEqual("number");
      expect(typeof currentCity.state).toEqual("string");
    });
  });
});
