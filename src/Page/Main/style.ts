import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
`;

export const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Scroll = styled.div`
  position: relative;
  width: 180px;
  height: 250px;
  perspective: 1000px;
`;

export const ContentBox = styled.div<{ transform: number | string }>`
  width: 100%;
  height: 100%;
  position: absolute;
  transform: translateZ(-288px) rotateY(${(props) => props.transform}deg);
  transform-style: preserve-3d;
  transition: transform 1s;
  :nth-child(1) {
    transform: rotateY(36deg) translateZ(288px);
  }
  :nth-child(2) {
    transform: rotateY(72deg) translateZ(288px);
  }
  :nth-child(3) {
    transform: rotateY(108deg) translateZ(288px);
  }
  :nth-child(4) {
    transform: rotateY(144deg) translateZ(288px);
  }
  :nth-child(5) {
    transform: rotateY(180deg) translateZ(288px);
  }
  :nth-child(6) {
    transform: rotateY(216deg) translateZ(288px);
  }
  :nth-child(7) {
    transform: rotateY(252deg) translateZ(288px);
  }
  :nth-child(8) {
    transform: rotateY(288deg) translateZ(288px);
  }
  :nth-child(9) {
    transform: rotateY(324deg) translateZ(288px);
  }
  :nth-child(10) {
    transform: rotateY(360deg) translateZ(288px);
  }
`;

export const Content = styled.div`
  position: absolute;
  width: 180px;
  height: 250px;
  border: 1px solid #000;
`;
