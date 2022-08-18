import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BoxModal = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.54);
`;
export const ModalContent = styled.div`
  display: flex;
  width: 48.063rem;
  height: 22.188rem;
  background: #ffffff;
  border-radius: 0.313rem;
  margin: auto;
  font-family: "Lato";
  font-style: normal;
  button {
    align-self: flex-start;
    font-size: 1rem;
    border-radius: 0.313rem;
    border: none;
    transition: 0.2s;
    background-color: white;
    :hover {
      transition: 0.2s;
      cursor: pointer;
      color: white;
      background-color: #444444;
    }
  }
  img {
    width: 11.25rem;
    height: 11.25rem;
    margin: 4.563rem 8rem 6.375rem 5.125rem;
  }
`;

export const ProductName = styled.div`
  margin: 4.188rem 1.875rem 1.563rem 0;
  width: 20.188rem;
  height: 1.25rem;

  font-weight: 400;
  font-size: 1.25rem;
  line-height: 100%;
  letter-spacing: 0.05em;
  color: #041e50;
`;
export const Price = styled.div`
  width: 7.063rem;
  height: 1.25rem;
  margin-bottom: 1.313rem;
  font-weight: 900;
  font-size: 1.25rem;
  line-height: 100%;
  letter-spacing: 0.05em;
  color: #041e50;
`;
export const DescriptionShort = styled.div`
  font-weight: 400;
  font-size: 0.625rem;
  line-height: 150.5%;
  margin-bottom: 1.875rem;
  letter-spacing: 0.05em;
  color: #222222;
`;

export const Details = styled.div`
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 100%;
  letter-spacing: 0.05em;
  color: #041e50;
`;
