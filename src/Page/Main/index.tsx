import { useState } from "react";
import Header from "../../Components/Header";
import { Container } from "./style";
import BeatLoader from "react-spinners/BeatLoader";

export default function Index() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  setTimeout(() => {
    setIsLoading(true);
  }, 1000);

  return isLoading ? (
    <div>
      <Header />
    </div>
  ) : (
    <Container>
      <BeatLoader color="#eeb8b8" />
    </Container>
  );
}
