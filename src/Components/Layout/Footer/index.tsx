import { Footer } from "./style";

export default function index() {
  const now = new Date();
  const year = now.getFullYear();
  return <Footer>&copy; {year} HyoJun Kim </Footer>;
}
