import { Container } from "./Containers/Container";
import { Section } from "./Containers/Section";
import { Card } from "./Layout/Card";
import { Footer } from "./Layout/Footer";
import { Header } from "./Layout/Header.js/index.js";
import { Profile } from "./Layout/Profile";
import { APIProvider } from "../data/contexts/APIContext";

function Main() {
  return (
    <APIProvider>
      <Container>
        <Header />
        <Section className="profile">
          <Profile />
        </Section>
        <Section className="cards">
          <Card />
        </Section>
        <Footer />
      </Container>
    </APIProvider>
  );
}

export default Main;
