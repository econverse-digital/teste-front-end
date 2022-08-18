import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  margin-left: 3.5rem;
  height: 21.875rem;
`;
export const BoxParceiro = styled.div`
  position: relative;
  h4 {
    position: absolute;
    left: 2.5rem;
    top: 3.125rem;
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 3.75rem;
    color: #ffffff;
  }
  p {
    position: absolute;
    left: 2.5rem;
    top: 9.375rem;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #ffffff;
    width: 12.5rem;
  }
  button {
    position: absolute;
    left: 2.5rem;
    bottom: 3.75rem;
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

export const BoxAssinatura = styled.div`
  display: flex;
  width: 50%;
  margin-left: 1.25rem;
  background: #fef6e7;
  border-radius: 1.25rem 0rem 0rem 1.25rem;

  h4 {
    width: 50%;
    font-weight: 700;
    font-size: 2rem;
    line-height: 3rem;
    color: #4d4d4d;
    margin: 2.875rem 0 1rem 2.5rem;
  }
  p {
    width: 50%;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #9f9f9f;
    margin: 1rem 0 1rem 2.5rem;
  }
  button {
    border: 1px solid #f0d075;
    border-radius: 0.625rem;
    padding: 0.75rem 1.5rem;
    font-weight: 900;
    font-size: 1rem;
    background: #fbb900;
    color: #ffffff;
    margin: 1rem 0 1rem 2.5rem;
    :hover {
      cursor: pointer;
      box-shadow: 0rem 0rem 0.625rem #faf5b3;
      border-radius: 0.625rem;
      color: black;
    }
  }
`;

export const ImgDog = styled.div`
  display: flex;
`;
