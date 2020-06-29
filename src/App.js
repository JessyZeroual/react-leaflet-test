import React from "react";

import NavigationBar from "./components/NavigationBar/NavigationBar";
import Map from "./components/Map/Map";
import useCities from "./helpers/useCities";
import { CitiesContextProvider } from "./context/CitiesContext";
import { StyledApp } from "./App.styled";

const App = () => {
  const { isLoading, cities, currentCity, setCurrentCity } = useCities();

  return (
    <CitiesContextProvider
      value={{
        state: { isLoading, cities, currentCity },
        dispatch: { setCurrentCity },
      }}
    >
      <StyledApp>
        <NavigationBar />
        <Map currentCity={currentCity} />
      </StyledApp>
    </CitiesContextProvider>
  );
};

export default App;
