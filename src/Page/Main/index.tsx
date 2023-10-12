import { useContext } from "react";
import { MainContainer, LoadingContainer } from "./style";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import BeatLoader from "react-spinners/BeatLoader";
import { LoadingContext } from "../../Components/Context/ContextApi";
import Header from "../../Components/Layout/Header";
import SideBar from '../../Components/Layout/SideBar'
import Sign from "../../Components/Layout/Slide";
import Footer from "../../Components/Layout/Footer";


export default function Index() {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const navigate = useNavigate();

  if (!isLoading) setTimeout(() => { setIsLoading(true); navigate("/1"); }, 1000);

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
            <SideBar />
            <Sign />
          </MainContainer>
          <Footer />
        </div>
      ) : (
        <LoadingContainer>
          <BeatLoader color="#FF7F00" />
        </LoadingContainer>
      )}
    </motion.div>
  );
}
