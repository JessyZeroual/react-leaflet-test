import React from "react";
import CityList from "../CityList/CityList";
import FilterCities from "../FilterCities/FilterCities";
import {
  StyledNavigationBar,
  StyledHeaderNavigationBar,
  StyledMainNavigationBar,
  // StyledFooterNavigationBar,
} from "./NavigationBar.styled";

const NavigationBar = () => (
  <StyledNavigationBar>
    <StyledHeaderNavigationBar>
      <FilterCities />
    </StyledHeaderNavigationBar>
    <StyledMainNavigationBar id="mainSideBarID">
      <CityList />
    </StyledMainNavigationBar>
    {/* <StyledFooterNavigationBar>footer</StyledFooterNavigationBar> */}
  </StyledNavigationBar>
);

export default NavigationBar;
