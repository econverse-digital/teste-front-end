import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 2rem;
  border-bottom: solid 1px #f0f0f0;
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  padding: 0 4.375rem;

  img {
    width: 0.859rem;
    height: 0.897rem;
    margin: 0.02rem;
  }
`;

export const GrayP = styled.p`
  color: #9f9f9f;
  font-size: 0.75rem;
  font-weight: 500;
  margin: 0 0.313rem;
`;

export const YellowP = styled.p`
  color: #fbb900;
  font-size: 0.75rem;
  font-weight: 500;
`;

export const Search = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;
  margin-top: 0.75rem;
  height: 3.75rem;
  border-bottom: solid 1px #f0f0f0;
  padding-bottom: 0.75rem;
  img {
    height: 1.563rem;
  }
`;

export const ImgLogo = styled.img`
  height: 2.875rem !important;
`;

export const BoxSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 41.063rem;
  height: 3rem;
  background-color: #fef6e7;
  border-radius: 0.625rem;
  padding: 0 1.5rem;
  input {
    width: 41.063rem;
    border: none;
    background-color: #fef6e7;
    color: #9f9f9f;
    font-size: 0.875rem;
    font-weight: 500;
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;
export const InfoSearch = styled.div`
  display: flex;
  justify-content: space-between;
  width: 12.5rem;
  img {
    :hover {
      cursor: pointer;
    }
  }
`;
export const BoxNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 2.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: #9f9f9f;
  border-radius: 0 0 0.625rem 0.625rem;
  box-shadow: 0rem 0.5rem 1rem rgba(179, 134, 0, 0.12);
  background-color: white;
  z-index: 1;
  span {
    :hover {
      cursor: pointer;
      box-shadow: 0rem 0rem 0.625rem #7f8104;
      border-radius: 0.313rem;
      padding: 0.313rem;
      color: #fbb900;
    }
  }
  .oferta {
    color: #fbb900;
  }
  img {
    margin: 0 0.313rem;
  }
`;
