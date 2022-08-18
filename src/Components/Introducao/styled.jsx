import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  span {
    position: absolute;
    top: 14.063rem;
    font-size: 2rem;
    color: #ffffff;
    :hover {
      cursor: pointer;
    }
  }
  .left {
    left: 4.125rem;
  }
  .right {
    right: 4.125rem;
  }
`;

export const Info = styled.div`
  position: absolute;
  width: 28.125rem;
  height: 11.25rem;
  left: 9rem;
  top: 7.438rem;
  color: #ffffff;
  div {
    font-weight: 800;
    font-size: 2.5rem;
    line-height: 3.75rem;
  }
  button {
    box-sizing: border-box;
    background: #fbb900;
    color: #ffffff;
    margin-top: 1.5rem;
    border: 1px solid #f0d075;
    border-radius: 0.625rem;
    padding: 0.75rem 1.5rem;
    font-weight: 900;
    font-size: 1rem;
    :hover {
      cursor: pointer;
      box-shadow: 0rem 0rem 0.625rem #faf5b3;
      border-radius: 0.625rem;
      color: black;
    }
  }
`;
