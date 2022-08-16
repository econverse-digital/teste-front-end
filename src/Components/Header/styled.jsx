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
  height: 32px;
  border-bottom: solid 1px #f0f0f0;
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  padding: 0 70px;

  img {
    width: 13.75px;
    height: 14.35px;
    margin: 5px;
  }
`;

export const GrayP = styled.p`
  color: #9f9f9f;
  font-size: 12px;
  font-weight: 500;
  margin: 0 5px;
`;

export const YellowP = styled.p`
  color: #fbb900;
  font-size: 12px;
  font-weight: 500;
`;

export const Search = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  margin-top: 12px;
  height: 60px;
  border-bottom: solid 1px #f0f0f0;
  padding-bottom: 12px;
  img {
    height: 25px;
  }
`;

export const ImgLogo = styled.img`
  height: 46px !important;
`;

export const BoxSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 657px;
  height: 48px;
  background-color: #fef6e7;
  border-radius: 10px;
  padding: 0 24px;
  span {
    color: #9f9f9f;
    font-size: 14px;
    font-weight: 500;
  }
`;
export const InfoSearch = styled.div`
  display: flex;
  justify-content: space-between;
  width: 200px;
`;
export const BoxNav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40px;
  font-size: 12px;
  font-weight: 600;
  color: #9f9f9f;
  border-radius: 0 0 10px 10px;
  box-shadow: 0px 8px 16px rgba(179, 134, 0, 0.12);
  .oferta {
    color: #fbb900;
  }
  img {
    margin: 0 5px;
  }
`;
