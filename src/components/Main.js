import { Card } from "./Card";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Profile } from "./Profile";
import { Section } from "./Containers/Section";
import { Container } from "./Containers/Container";

export function Main() {
  return (
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
}
