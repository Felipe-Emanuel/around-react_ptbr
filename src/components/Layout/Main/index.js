import { Container } from "../../Containers/Container";
import { Section } from "../../Containers/Section";
import { Card } from "../Card";
import { Footer } from "../Footer";
import { Header } from "../Header.js";
import { Profile } from "../Profile";

export const Main = () => (
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
);
