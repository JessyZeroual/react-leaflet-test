import styled from "styled-components";
import { secondaryColor } from "../../constant/style-constants";
import { StyledWrapperCenter } from "../../style/common.styled-component";

export const StyledWrapperCityNotAvailable = styled(StyledWrapperCenter)`
  padding: 10px;
  color: #d9534f;
`;

export const StyledInputSearch = styled.input`
  outline: none;
  border: none;
  margin-left: 10px;
  height: 30px;
  width: 100%;
`;

export const StyledInputGroup = styled.div`
  display: flex;
  height: 30px;
`;

export const StyledForm = styled.form`
  padding: 2px 10px;
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  &:hover {
    box-shadow: 0 0 3pt grey;
  }
`;

export const StyledWrapperSearchResult = styled.div`
  margin-top: 5px;
  border-top: 1px solid #c0c0c0;
`;

export const StyledItemSearchResult = styled.div`
  padding: 10px;
  color: ${({ active }) => active && secondaryColor};
  &:hover {
    cursor: pointer;
    color: ${secondaryColor};
  }
`;
