import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  /* width: 100vw; */
  margin-left: 56px;
  height: 350px;
`;
export const BoxParceiro = styled.div`
  position: relative;
  h4 {
    position: absolute;
    left: 40px;
    top: 50px;
    font-weight: 700;
    font-size: 40px;
    line-height: 60px;
    color: #ffffff;
  }
  p {
    position: absolute;
    left: 40px;
    top: 150px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    width: 200px;
  }
  button {
    position: absolute;
    left: 40px;
    bottom: 60px;
    box-sizing: border-box;
    background: #fbb900;
    color: #ffffff;
    margin-top: 24px;

    border: 1px solid #f0d075;
    border-radius: 10px;
    padding: 12px 24px;
    font-weight: 900;
    font-size: 16px;
    :hover {
      cursor: pointer;
    }
  }
`;

export const BoxAssinatura = styled.div`
  display: flex;
  width: 50%;
  margin-left: 20px;
  background: #fef6e7;
  border-radius: 20px 0px 0px 20px;

  h4 {
    width: 50%;
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    color: #4d4d4d;
    margin: 46px 0 16px 40px;
  }
  p {
    width: 50%;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #9f9f9f;
    margin: 16px 0 16px 40px;
  }
  button {
    border: 1px solid #f0d075;
    border-radius: 10px;
    padding: 12px 24px;
    font-weight: 900;
    font-size: 16px;
    background: #fbb900;
    color: #ffffff;
    margin: 16px 0 16px 40px;
    :hover {
      cursor: pointer;
    }
  }
`;

export const ImgDog = styled.div`
display: flex;

`