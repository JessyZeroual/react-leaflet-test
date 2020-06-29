import React from "react";
import TestRenderer from "react-test-renderer";
import { act } from "react-test-renderer";

import CityList from "../CityList";
import CitiesContext from "../../../context/CitiesContext";
import cities from "../../../test/listOfCitiesTests";

const elementMock = {
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
};
jest.spyOn(document, "getElementById").mockImplementation(() => elementMock);

const currentCity = [
  {
    city: "New York",
    growth_from_2000_to_2013: "4.8%",
    latitude: 40.7127837,
    longitude: -74.0059413,
    population: "8405837",
    rank: "1",
    state: "New York",
  },
];

const setCurrentCity = jest.fn();

describe("CityList", () => {
  let renderer;

  const mountCityList = () =>
    act(() => {
      renderer = TestRenderer.create(
        <CitiesContext.Provider
          value={{
            state: { isLoading: false, cities, currentCity },
            dispatch: { setCurrentCity },
          }}
        >
          <CityList />
        </CitiesContext.Provider>
      );
    });

  describe("When CityList is mounted", () => {
    it("renders correctly", () => {
      mountCityList();
      expect(renderer).toMatchSnapshot();
    });

    it("receives a list of 20 cities", () => {
      mountCityList();
      expect(renderer.toJSON().length).toEqual(20);
    });

    describe("When we scroll down", () => {
      mountCityList();
      it("adds 20 cities to the list", async () => {
        await act(async () => {
          // Simulate scroll to bottom
        });
        // expect(renderer.toJSON().length).toEqual(40);
      });
    });
  });
});
