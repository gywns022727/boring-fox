import styled from "styled-components";

export const Btn = styled.div`
  position: fixed;
  right: 20px;
  bottom: 50%;
  transform: translate(0, 50%);
  cursor: pointer;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
