import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  LoadingContext,
  CountContext,
} from "../../Components/Context/ContextApi";
import {
  MainContainer,
  LoadingContainer,
  Scroll,
  ContentBox,
  Content,
} from "./style";
import Header from "../../Components/Layout/Header";
import BeatLoader from "react-spinners/BeatLoader";

export default function Index() {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const { isCount, setIsCount } = useContext(CountContext);
  const navigate = useNavigate();

  const ScrollEvent = (e: React.MouseEvent<HTMLElement>) => {
    e.clientX > window.screen.width / 2
      ? setIsCount(isCount - 1)
      : setIsCount(isCount + 1);
  };

  setTimeout(() => {
    setIsLoading(true);
  }, 1000);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {isLoading ? (
        <div
          onClick={(e) => {
            ScrollEvent(e);
          }}
        >
          <Header />
          <MainContainer>
            <Scroll
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <ContentBox transform={(isCount / 10) * -360}>
                <Content
                  onClick={() => {
                    navigate("/ark");
                  }}
                >
                  1
                </Content>
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
          <BeatLoader color="#FF7F00" />
        </LoadingContainer>
      )}
    </motion.div>
  );
}
