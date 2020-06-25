import styled from "styled-components";

export const StyledWrapperMap = styled.div`
  border: 1px solid grey;
  margin-left: 20px;
  flex: 1;
`;

export const StyledWrapperCurrentCityDetail = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledCurrentCityDetailText = styled.p`
  font-weight: bold;
  font-size: 15px;
  padding: 0px 10px;
  color: ${({ isNegative }) => isNegative && "red"};
`;
