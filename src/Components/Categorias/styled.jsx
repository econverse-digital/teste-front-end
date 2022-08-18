import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem 0;

  h2 {
    margin-left: 3.5rem;
    font-weight: 700;
    font-size: 2rem;
    line-height: 3rem;
    color: #4d4d4d;
  }
`;

export const Dogs = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 2.813rem;

  div {
    padding: 0.188rem;
    border-radius: 0.625rem;
    box-shadow: 0rem 6px 1rem rgba(179, 134, 0, 0.24);
    color: #4d4d4d;
    :hover {
      cursor: pointer;
      box-shadow: 0rem 0rem 0.625rem #61413e;
      border-radius: 1.25rem;
      color: #fbb900;
      font-weight: bold;
    }
  }
`;

export const Span = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    border-radius: 0.938rem;
    :hover {
      cursor: pointer;
      box-shadow: 0rem 0rem 0.625rem #61413e;
      border-radius: 0.625rem;
      margin: 0.125rem;
    }
  }
  p {
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #9f9f9f;
    :hover {
      cursor: pointer;
      box-shadow: 0rem 0rem 0.625rem #61413e;
      border-radius: 0.313rem;
      margin-top: 0.625rem;
      padding: 0 0.313rem;
      color: #fbb900;
    }
  }
`;
