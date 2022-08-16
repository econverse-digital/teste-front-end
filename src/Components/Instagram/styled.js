import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 80px 0;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 56px;

  h2 {
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    color: #4d4d4d;
  }
  span {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    text-decoration-line: underline;
    color: #fbb900;
  }
`;

export const Feed = styled.div`
  display: flex;
  justify-content: center;
`;
