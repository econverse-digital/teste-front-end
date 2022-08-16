import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 80px 0;

  h2 {
    margin-left: 56px;
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    color: #4d4d4d;
  }
`;

export const BoxBlog = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 56px;
`;
export const Publication = styled.div`
  margin: 0 10px;
  width: 277px;
  background: #fef6e7;
  border-radius: 20px;
  img {
    border-radius: 20px 20px 0 0;
  }
  h5 {
    margin: 24px;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #4d4d4d;
  }
  p {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #9f9f9f;
    margin: 0 24px;
  }

  button {
    border: 1px solid #f0d075;
    background: #fbb900;
    border-radius: 10px;
    padding: 12px 24px;
    font-weight: 900;
    font-size: 16px;
    margin: 24px;
    :hover {
      cursor: pointer;
    }
  }
`;
