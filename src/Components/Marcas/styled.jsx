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

export const BoxMarcas = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 45px;
  border-radius: 15px;
`;

export const Marca = styled.span`
  display: flex;
  border: 1px solid #E5E5E5;
  box-shadow: 0px 8px 16px rgba(179, 134, 0, 0.12);
  border-radius: 20px;

  height: 178px;
  width: 178px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
