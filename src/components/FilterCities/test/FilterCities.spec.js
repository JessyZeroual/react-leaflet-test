import React from "react";
import TestRenderer from "react-test-renderer";
import { act } from "react-test-renderer";

import FilterCities from "../FilterCities";
import CitiesContext from "../../../context/CitiesContext";
import cities from "../../../test/listOfCitiesTests";

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

describe("FilterCities", () => {
  let renderer;

  const mountFilterCities = () =>
    act(() => {
      renderer = TestRenderer.create(
        <CitiesContext.Provider
          value={{
            state: { cities, currentCity },
            dispatch: { setCurrentCity },
          }}
        >
          <FilterCities />
        </CitiesContext.Provider>
      );
    });

  describe("When FilterCities is mounted", () => {
    it("renders correctly", () => {
      mountFilterCities();
      expect(renderer).toMatchSnapshot();
    });

    describe("When we handle input", () => {
      mountFilterCities();
      describe("When you enter an existing value in the list of cities", () => {
        it("returns the cities containing the entered value", async () => {
          const input = renderer.root.findByType("input");

          await act(async () => {
            input.props.onChange({ target: { value: "n" } });
          });

          expect(renderer.toJSON().children[1].children[0].children).toEqual([
            "New York",
          ]);
        });
      });

      describe("When you enter a value that does not exist in the list of cities", () => {
        it("returns 'This city is not available' ", async () => {
          const input = renderer.root.findByType("input");

          await act(async () => {
            input.props.onChange({ target: { value: "FakeCity" } });
          });

          expect(renderer.toJSON().children[1].children[0].children).toEqual([
            "This city is not available",
          ]);
        });
      });
    });
  });
});
