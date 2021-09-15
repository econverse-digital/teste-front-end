import styled from "styled-components";

export const ContainerHeader = styled.nav`
  display: flex;
  position: absolute;
  width: 1281px;
  height: 38px;
  left: -2px;
  top: -1px;
  justify-content: space-evenly;
  align-items: center;
  background: #041e50;
  color: #ffffff;
`;

export const ItemHeader = styled.div`
  display: flex;
  flex-direction: row;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 100%;
  width: 361px;
  justify-content: center;
  align-items: center;
  border-left: 1px solid white;
  height: 19px;
`;
