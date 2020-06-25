import styled from "styled-components";
import {
  NavigationBarWidth,
  secondaryColor,
} from "../../constant/style-constants";

export const NavigationBarStyled = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${NavigationBarWidth}px;
  padding: 10px;
  background: #f4f4f6;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

export const HeaderNavigationBar = styled.div`
  position: fixed;
  width: ${NavigationBarWidth}px;
  height: 30px;
`;

export const MainNavigationBar = styled.div`
  margin-top: 50px;
  overflow: auto;
  ::-webkit-scrollbar {
    background-color: transparent;
    border-radius: 20px;
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #c0c0c0;
    border-radius: 20px;
  }
  &:hover {
    ::-webkit-scrollbar-thumb {
      background-color: ${secondaryColor};
    }
  }
`;
export const FooterNavigationBar = styled.div`
  height: 60px;
`;
