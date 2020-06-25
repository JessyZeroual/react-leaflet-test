import React from "react";

const CitiesContext = React.createContext({});

export const CitiesContextProvider = CitiesContext.Provider;
export const CitiesContextConsumer = CitiesContext.Consumer;
export default CitiesContext;
