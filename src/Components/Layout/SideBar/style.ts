import styled from "styled-components";

export const PcContainer = styled.div`
  position: fixed;
  bottom: 50%;
  transform: translateY(50%);
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 500px) {
    display: none;
  }

  > div {
    margin-bottom: 10px;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #000;
    border-radius: 100vh;
    > img {
      cursor: pointer;
    }
  }
`;

export const MobileContainer = styled.div`
  display: none;
  @media screen and (max-width: 500px) {
    display: block;
    height: 100vh;
  }
`;

export const ImgArticle = styled.div`
  margin-bottom: 10px;
  width: 60px;
  height: 60px;
  border: 2px solid #000;
  border-radius: 100vh;
  position: relative;
  > img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  > a {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
