import { useState } from "react";
import Header from "../../Components/Header";
import {
  MainContainer,
  LoadingContainer,
  Scroll,
  ContentBox,
  Content,
} from "./style";
import BeatLoader from "react-spinners/BeatLoader";

export default function Index() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSelected, setIsSelected] = useState<number>(0);
  const cellCoutn: number = 10;
  let angle: number = (isSelected / cellCoutn) * -360;
  const halfScreen: number = window.screen.width / 2;

  const ScrollEvent = (e: React.MouseEvent<HTMLElement>) => {
    const clickPosition: number = e.clientX;
    clickPosition > halfScreen
      ? setIsSelected(isSelected - 1)
      : setIsSelected(isSelected + 1);
  };

  setTimeout(() => {
    setIsLoading(true);
  }, 1000);

  return isLoading ? (
    <div>
      <Header />
      <MainContainer
        onClick={(e) => {
          ScrollEvent(e);
        }}
      >
        <Scroll>
          <ContentBox
            style={{ transform: `translateZ(-288px) rotateY(${angle}deg)` }}
          >
            <Content>1</Content>
            <Content>2</Content>
            <Content>3</Content>
            <Content>4</Content>
            <Content>5</Content>
            <Content>6</Content>
            <Content>7</Content>
            <Content>8</Content>
            <Content>9</Content>
            <Content>10</Content>
          </ContentBox>
        </Scroll>
      </MainContainer>
    </div>
  ) : (
    <LoadingContainer>
      <BeatLoader color="#eeb8b8" />
    </LoadingContainer>
  );
}
