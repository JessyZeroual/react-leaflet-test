import React from "react";
import {
  StyledWrapperCurrentCityDetail,
  StyledCurrentCityDetailText,
} from "./Map.styled";

const CurrentCityDetail = ({ currentCity }) => (
  <>
    <StyledWrapperCurrentCityDetail>
      <img src="/icon/buildings.svg" width="30" alt="icon city" />
      <StyledCurrentCityDetailText>
        {currentCity.city}
      </StyledCurrentCityDetailText>
    </StyledWrapperCurrentCityDetail>
    <StyledWrapperCurrentCityDetail>
      <img src="/icon/flag.svg" width="30" alt="icon state" />
      <StyledCurrentCityDetailText>
        {currentCity.state}
      </StyledCurrentCityDetailText>
    </StyledWrapperCurrentCityDetail>
    <StyledWrapperCurrentCityDetail>
      <img src="/icon/growth.svg" width="30" alt="icon growth" />

      <StyledCurrentCityDetailText
        isNegative={Math.sign(currentCity.growth_from_2000_to_2013) === -1}
      >
        {`${currentCity.growth_from_2000_to_2013}%`}
      </StyledCurrentCityDetailText>
    </StyledWrapperCurrentCityDetail>
    <StyledWrapperCurrentCityDetail>
      <img src="/icon/population.svg" width="30" alt="icon population" />
      <StyledCurrentCityDetailText>
        {currentCity.population.toLocaleString("en-US")}
      </StyledCurrentCityDetailText>
    </StyledWrapperCurrentCityDetail>
  </>
);

export default CurrentCityDetail;
