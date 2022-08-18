import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5rem 0;

  h2 {
    margin-left: 3.5rem;
    font-weight: 700;
    font-size: 2rem;
    line-height: 3rem;
    color: #4d4d4d;
  }
`;

export const BoxBlog = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 3.5rem;
  @media screen and (max-device-width: 768px) {
    flex-direction: column;
  }
`;
export const Publication = styled.div`
  margin: 0 0.625rem;
  width: 17.313rem;
  background: #fef6e7;
  border-radius: 1.25rem;
  @media screen and (max-device-width: 768px) {
    margin: 0.625rem;
  }
  img {
    border-radius: 1.25rem 1.25rem 0 0;
  }
  h5 {
    margin: 1.5rem;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.875rem;
    color: #4d4d4d;
  }
  p {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.313rem;
    color: #9f9f9f;
    margin: 0 1.5rem;
  }

  button {
    border: 1px solid #f0d075;
    background: #fbb900;
    border-radius: 0.625rem;
    padding: 0.75rem 1.5rem;
    font-weight: 900;
    font-size: 1rem;
    margin: 1.5rem;
    :hover {
      cursor: pointer;
      box-shadow: 0rem 0rem 0.625rem #61413e;
      border: 1px solid #fbb900;
    }
  }
`;
