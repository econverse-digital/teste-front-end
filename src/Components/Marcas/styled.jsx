import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem 0;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 3.5rem;

  h2 {
    font-weight: 700;
    font-size: 2rem;
    line-height: 3rem;
    color: #4d4d4d;
  }

  span {
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.875rem;
    text-decoration-line: underline;
    color: #fbb900;
    :hover {
      cursor: pointer;
    }
  }
`;

export const BoxMarcas = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 2.813rem;
  border-radius: 0.938rem;
`;

export const Marca = styled.span`
  display: flex;
  border: 1px solid #e5e5e5;
  box-shadow: 0rem 0.5rem 1rem rgba(179, 134, 0, 0.12);
  border-radius: 1.25rem;

  height: 11.125rem;
  width: 11.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
