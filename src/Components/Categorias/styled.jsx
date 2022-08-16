import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 80px 0;

  h2 {
    margin-left: 56px;
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    color: #4d4d4d;
  }
`;

export const Dogs = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 45px;

  border-radius: 15px;
`;

export const Span = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  

  img {
    border-radius: 15px;
    :hover {
      cursor: pointer;
    }
  }
  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #9f9f9f;
    :hover {
      cursor: pointer;
    }
  }
`;
