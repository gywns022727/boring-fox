import { useContext } from "react";
import { MainContainer, LoadingContainer } from "./style";
import { motion } from "framer-motion";
import BeatLoader from "react-spinners/BeatLoader";
import { LoadingContext } from "../../Components/Context/ContextApi";
import Header from "../../Components/Layout/Header";
import Sign from "../../Components/Layout/Slide";

export default function Index() {
  const { isLoading, setIsLoading } = useContext(LoadingContext);

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
        <div>
          <Header />
          <MainContainer>
            <Sign />
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
