import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  color: #ffffff;
  margin-top: 5.438rem;
`;

export const RedesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #fbb900;
  width: 40%;
  border-right: 1px solid #ffffff;
  padding-bottom: 1.875rem;
`;

export const BoxRedes = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.625rem;
    margin: 3rem 5.313rem 1.875rem 5.313rem;
  }
  img {
    margin: 0 0.938rem 0 0.938rem;
  }
`;

export const BoxCao = styled.div`
  margin: 3.125rem 0 1.5rem 0;
  span {
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.625rem;
    margin: 3.125rem 0 1.5rem 0;
  }
  p {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.313rem;
    margin: 1.5rem 4.688rem 0 4.688rem;
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
  padding-top: 3.125rem;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.875rem;
`;

export const Institucional = styled.div`
  p {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.313rem;
  }
`;
export const Atendimento = styled.div`
  p {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.313rem;
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
    font-size: 1.25rem;
    line-height: 1.875rem;
    margin: 0.625rem 0 0.625rem 0;
  }
  .box {
    width: 15.625rem;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1.25rem;
  }
  div {
    display: flex;
    justify-content: center;
    background-color: white;
    width: 3.125rem;
    height: 1.875rem;
    border-radius: 0.313rem;
    margin: 0.313rem 0.938rem;
  }
`;

export const Seguranca = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.625rem;
  span {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.875rem;
    margin-bottom: 1.875rem;
  }
  img {
    width: 5.208rem;
    height: 2.625rem;
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
    font-size: 0.75rem;
    line-height: 1.125rem;
    width: 13.563rem;
    height: 3.375rem;
  }
`;