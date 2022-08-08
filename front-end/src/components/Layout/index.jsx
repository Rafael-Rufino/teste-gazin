import Header from "../Header";
import Footer from "../Footer";
import { DeveloperList } from "../DeveloperList";
import { Container } from "./styles";

export default function Layout() {
  return (
    <Container>
      <Header />
      <DeveloperList />
      <Footer />
    </Container>
  );
}
