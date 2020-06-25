import React, { useContext } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import CitiesContext from "../../context/CitiesContext";
import useInfiniteScroll from "../../utils/useInfiniteScroll";
import { secondaryColor } from "../../constant/style-constants";
import { StyledCityItem } from "./CityList.styled";
import { StyledWrapperCenter } from "../../style/common.styled-component";

const CityList = () => {
  const citiesContext = useContext(CitiesContext);
  const { isLoading, cities, currentCity } = citiesContext.state;
  const { setCurrentCity } = citiesContext.dispatch;

  const {
    numberOfElements,
    fetchingMoreElements,
    hasNextElements,
  } = useInfiniteScroll(cities);

  return (
    <>
      {isLoading ? (
        <StyledWrapperCenter>
          <ClipLoader size={40} color={secondaryColor} />
        </StyledWrapperCenter>
      ) : (
        <>
          {cities.slice(0, numberOfElements).map((city, key) => (
            <StyledCityItem
              key={key}
              active={currentCity.city === city.city}
              onClick={() => setCurrentCity(city)}
            >
              {city.city}
            </StyledCityItem>
          ))}
          {fetchingMoreElements && (
            <StyledWrapperCenter>
              <ClipLoader size={20} color={secondaryColor} />
            </StyledWrapperCenter>
          )}
          {!hasNextElements && (
            <StyledWrapperCenter>No other cities available</StyledWrapperCenter>
          )}
        </>
      )}
    </>
  );
};

export default CityList;
