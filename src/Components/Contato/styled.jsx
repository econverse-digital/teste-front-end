import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 17.563rem;
    height: 6.5rem;
  }
`;

export const BoxForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 48.25rem;
  height: 21.625rem;
  background: #fef6e7;
  border-radius: 1.25rem;

  h5 {
    width: 19.938rem;
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.625rem;
    color: #4d4d4d;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  div {
    display: flex;
    align-items: center;
    width: 18.75rem;
    height: 3rem;
    background-color: #ffffff;
    border: 1px solid #e5e5e5;
    border-radius: 0.625rem;
    padding: 0 1.5rem;
    margin-bottom: 0.5rem;
  }

  img {
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.938rem;
  }

  input {
    width: 41.063rem;
    border: none;
    background-color: #ffffff;
    color: #9f9f9f;
    font-size: 0.875rem;
    font-weight: 500;
    outline: 0;
  }

  button {
    border: 1px solid #f0d075;
    background: #fbb900;
    border-radius: 0.625rem;
    padding: 0.625rem 2rem;
    font-weight: 900;
    font-size: 0.875rem;
    width: 9.063rem;
    height: 2.5rem;
    margin: 2rem;
    color: #ffffff;
    :hover {
      cursor: pointer;
      color: black;
    }
  }
`;
