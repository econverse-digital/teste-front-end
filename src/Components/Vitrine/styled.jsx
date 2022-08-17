import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 80px 0;
`;

export const BoxMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin-left: 56px;
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    color: #4d4d4d;
  }
`;

export const MenuNav = styled.div`
  margin-right: 40px;

  span {
    color: #fbb900;
    margin: 0 20px;
  }

  button {
    border: 1px solid #e5e5e5;
    background: #ffffff;
    color: #9f9f9f;
    border-radius: 10px;
    padding: 10px 16px;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    margin: 0 10px;
    :hover {
      cursor: pointer;
    }
  }

  .select {
    border: none;
    color: #ffffff;
    background: #fbb900;
  }
`;

export const BoxProduto = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  justify-items: center;
`;

export const CardProdutos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  margin-bottom: 25px;
  :hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px #61413e;
    border-radius: 10px;
  }
`;
export const OFF = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 40px;
    background: #fef6e7;
    border-radius: 6px;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    color: #fbb900;
  }
`;

export const InfoProdutos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductName = styled.div`
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;
  color: #4d4d4d;
`;
export const PrecoOriginal = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-decoration-line: line-through;
  color: #9f9f9f;
`;

export const PrecoAtual = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: #4d4d4d;
`;

export const PrecoAssinante = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #fbb900;
`;

export const Assinante = styled.div`
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #4d4d4d;
`;
export const ButtonAdicionar = styled.button`
  width: 220px;
  height: 48px;
  background: #fbb900;
  border: 1px solid #f0d075;
  border-radius: 10px;
  margin-top: 14px;
  font-weight: 900;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.08em;
  color: #ffffff;
  :hover {
    cursor: pointer;
    box-shadow: 0px 0px 10px #61413e;
  }
`;

export const ButtonTodos = styled.button`
  margin-top: 15px;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  border: none;
  background-color: white;
  text-decoration-line: underline;
  color: #fbb900;
  :hover {
    cursor: pointer;
  }
`;
