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
  width: 769px;
  height: 355px;
  background: #ffffff;
  border-radius: 5px;
  margin: auto;
  font-family: "Lato";
  font-style: normal;
  button {
    align-self: flex-start;
    font-size: 1rem;
    border-radius: 5px;
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
    width: 180px;
    height: 180px;
    margin: 73px 128px 102px 82px;
  }
`;

export const ProductName = styled.div`
  margin: 67px 30px 25px 0;
  width: 323px;
  height: 20px;

  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0.05em;
  color: #041e50;
`;
export const Price = styled.div`
  width: 113px;
  height: 20px;
  margin-bottom: 21px;
  font-weight: 900;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0.05em;
  color: #041e50;
`;
export const DescriptionShort = styled.div`
  font-weight: 400;
  font-size: 10px;
  line-height: 150.5%;
  margin-bottom: 30px;
  letter-spacing: 0.05em;
  color: #222222;
`;

export const Details = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0.05em;
  color: #041e50;
`;
