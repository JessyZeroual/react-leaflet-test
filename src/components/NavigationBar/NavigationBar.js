import React from "react";
import CityList from "../CityList/CityList";
import FilterCities from "../FilterCities/FilterCities";
import {
  NavigationBarStyled,
  HeaderNavigationBar,
  MainNavigationBar,
  // FooterNavigationBar,
} from "./NavigationBar.styled";

const NavigationBar = () => (
  <NavigationBarStyled>
    <HeaderNavigationBar>
      <FilterCities />
    </HeaderNavigationBar>
    <MainNavigationBar id="mainSideBarID">
      <CityList />
    </MainNavigationBar>
    {/* <FooterNavigationBar>footer</FooterNavigationBar> */}
  </NavigationBarStyled>
);

export default NavigationBar;
