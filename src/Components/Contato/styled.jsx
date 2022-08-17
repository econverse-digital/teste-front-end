import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 281px;
    height: 104px;
  }
`;

export const BoxForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 772px;
  height: 346px;
  background: #fef6e7;
  border-radius: 20px;

  h5 {
    width: 319px;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    color: #4d4d4d;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  input {
    width: 313px;
    height: 48px;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    padding-left: 30px;
    margin-bottom: 8px;
  }

  button {
    border: 1px solid #f0d075;
    background: #fbb900;
    border-radius: 10px;
    padding: 10px 32px;
    font-weight: 900;
    font-size: 14px;
    width: 145px;
    height: 40px;
    margin: 32px;
    color: #ffffff;
    :hover {
      cursor: pointer;
    }
  }
`;
