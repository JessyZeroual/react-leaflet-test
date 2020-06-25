import styled from "styled-components";
import { CityItemHeight } from "../../constant/style-constants";

export const StyledCityItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${CityItemHeight}px;
  margin: 10px;
  background: #fff;
  box-shadow: ${({ active }) => active && "0px 2px 4px grey"};
  border-radius: 5px;
  transform-origin: bottom;
  transition: all 0.1s ease-in-out;


  &:hover {
    cursor: pointer;
    box-shadow: 0px 1px 3px grey;
    transform: scale(1.05);
  }
`;

