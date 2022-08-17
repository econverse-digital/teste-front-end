import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  color: #ffffff;
  margin-top: 87px;
`;

export const RedesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #fbb900;
  width: 40%;
  border-right: 1px solid #ffffff;
  padding-bottom: 30px;
`;

export const BoxRedes = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    margin: 48px 85px 30px 85px;
  }
  img {
    margin: 0 15px 0 15px;
  }
`;

export const BoxCao = styled.div`
  margin: 50px 0 24px 0;
  span {
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    margin: 50px 0 24px 0;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    margin: 24px 75px 0 75px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const BoxInfo = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #fbb900;
  padding-top: 50px;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
`;

export const Institucional = styled.div`
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
  }
`;
export const Atendimento = styled.div`
  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
  }
`;

export const BoxPagamento = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #fbb900;
  border-bottom: 1px solid #ffffff;
`;

export const PagamentoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  h5 {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    margin: 10px 0 10px 0;
  }
  .box {
    width: 250px;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
  div {
    display: flex;
    justify-content: center;
    background-color: white;
    width: 50px;
    height: 30px;
    border-radius: 5px;
    margin: 5px 15px;
  }
`;

export const Seguranca = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  span {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 30px;
  }
  img {
    width: 83.33px;
    height: 42px;
  }
`;

export const BoxEndereco = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  background-color: #fbb900;

  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    width: 217px;
    height: 54px;
  }
`;