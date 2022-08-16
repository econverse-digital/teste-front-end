import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 490px;
  /* position: absolute; */
  top: 134px;

  span {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 380px;
    font-size: 2rem;
    color: #ffffff;
    :hover {
      cursor: pointer;
    }
  }
  .left {
    left: 66px;
  }
  .right {
    left: 1214px;
  }
`;

export const Info = styled.div`
  position: absolute;
  width: 450px;
  height: 180px;
  left: 144px;
  top: 280px;
  color: #ffffff;
  div {
    font-weight: 800;
    font-size: 40px;
    line-height: 60px;
  }
  button {
    box-sizing: border-box;
    background: #fbb900;
    color: #ffffff;
    margin-top: 24px;

    border: 1px solid #f0d075;
    border-radius: 10px;
    padding: 12px 24px;
    font-weight: 900;
    font-size: 16px;
    :hover {
      cursor: pointer;
    }
  }
`;
