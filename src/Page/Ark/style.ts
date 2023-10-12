import styled from "styled-components";

export const Canvas = styled.canvas`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #000;
  /* border-radius: 100vh; */
  @media (max-width: 717px) and (max-height: 512px) {
    width: 350px;
    height: 350px;
  }
`;
