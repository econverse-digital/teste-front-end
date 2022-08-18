import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem 0;
`;

export const BoxMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin-left: 3.5rem;
    font-weight: 700;
    font-size: 2rem;
    line-height: 3rem;
    color: #4d4d4d;
  }
`;

export const MenuNav = styled.div`
  margin-right: 2.5rem;

  span {
    color: #fbb900;
    margin: 0 1.25rem;
    :hover {
      cursor: pointer;
    }
  }
  button {
    border: 1px solid #e5e5e5;
    background: #ffffff;
    color: #9f9f9f;
    border-radius: 0.625rem;
    padding: 0.625rem 1rem;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.313rem;
    margin: 0 0.625rem;
    :hover {
      cursor: pointer;
      box-shadow: 0rem 0rem 0.625rem #61413e;
      border: 1px solid #fbb900;
      margin-top: 0.313rem;
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
  width: 13.75rem;
  margin-bottom: 1.563rem;
  :hover {
    cursor: pointer;
    box-shadow: 0rem 0rem 0.625rem #61413e;
    border-radius: 0.625rem;
    padding: 0.313rem;
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
    width: 6.25rem;
    height: 2.5rem;
    background: #fef6e7;
    border-radius: 6px;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.313rem;
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
  font-size: 0.875rem;
  line-height: 1.313rem;
  color: #4d4d4d;
`;
export const PrecoOriginal = styled.div`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  text-decoration-line: line-through;
  color: #9f9f9f;
`;

export const PrecoAtual = styled.div`
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.688rem;
  color: #4d4d4d;
`;

export const PrecoAssinante = styled.div`
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #fbb900;
`;

export const Assinante = styled.div`
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 1.125rem;
  color: #4d4d4d;
`;
export const ButtonAdicionar = styled.button`
  width: 13.75rem;
  height: 3rem;
  background: #fbb900;
  border: 1px solid #f0d075;
  border-radius: 0.625rem;
  margin-top: 0.875rem;
  font-weight: 900;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.08em;
  color: #ffffff;
  :hover {
    cursor: pointer;
    box-shadow: 0rem 0rem 0.625rem #61413e;
  }
`;

export const ButtonTodos = styled.button`
  margin-top: 0.938rem;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.875rem;
  border: none;
  background-color: white;
  text-decoration-line: underline;
  color: #fbb900;
  :hover {
    cursor: pointer;
  }
`;
