import React, { useState, useContext } from "react";
import CitiesContext from "../../context/CitiesContext";
import {
  StyledInputSearch,
  StyledInputGroup,
  StyledForm,
  StyledWrapperSearchResult,
  StyledItemSearchResult,
  StyledWrapperCityNotAvailable,
} from "./FilterCities.styled";

const FilterCities = () => {
  const citiesContext = useContext(CitiesContext);
  const { cities, currentCity } = citiesContext.state;
  const { setCurrentCity } = citiesContext.dispatch;
  const [searchPhrase, setSearchPhrase] = useState("");

  const citySuggestions = cities.filter(({ city }) =>
    city.toLowerCase().includes(searchPhrase.toLowerCase())
  );

  return (
    <StyledForm onSubmit={(e) => e.preventDefault()}>
      <StyledInputGroup>
        <img src="/icon/search.svg" width="15" alt="icon search" />
        <StyledInputSearch onChange={(e) => setSearchPhrase(e.target.value)} />
      </StyledInputGroup>

      {searchPhrase && (
        <StyledWrapperSearchResult>
          {citySuggestions.length ? (
            citySuggestions.slice(0, 5).map((citySuggestion, key) => (
              <StyledItemSearchResult
                key={key}
                active={currentCity.city === citySuggestion.city}
                onClick={() => setCurrentCity(citySuggestion)}
              >
                {citySuggestion.city}
              </StyledItemSearchResult>
            ))
          ) : (
            <StyledWrapperCityNotAvailable>
              This city is not available
            </StyledWrapperCityNotAvailable>
          )}
        </StyledWrapperSearchResult>
      )}
    </StyledForm>
  );
};

export default FilterCities;
