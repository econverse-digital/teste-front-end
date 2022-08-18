import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem 0;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 3.5rem;

  h2 {
    font-weight: 700;
    font-size: 2rem;
    line-height: 3rem;
    color: #4d4d4d;
  }
  span {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.875rem;
    text-decoration-line: underline;
    color: #fbb900;
    :hover {
      cursor: pointer;
    }
  }
`;

export const Feed = styled.div`
  display: flex;
  justify-content: center;
`;
