import { Container } from "./components/Containers/Container";
import { Section } from "./components/Containers/Section";
import { Card } from "./components/Layout/Card";
import { Footer } from "./components/Layout/Footer";
import { Header } from "./components/Layout/Header.js";
import { Profile } from "./components/Layout/Profile";
import { APIProvider } from "./data/contexts/APIContext";

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
