import styled from "styled-components";
import { primaryColor } from "./constant/style-constants";

export const StyledApp = styled.div`
  margin: 40px auto;
  padding: 40px;
  width: 80%;
  display: flex;
  background: ${primaryColor};
  border-radius: 15px;
  height: calc(100vh - 164px);
`;
