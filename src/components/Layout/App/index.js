import { Main } from "../../Containers/Main";
import { Section } from "../../Containers/Section";
import { Card } from "../Card";
import { Footer } from "../Footer";
import { Header } from "../Header.js";
import { Profile } from "../Profile";

export const Gallery = () => (
  <Main>
    <Header />
    <Section className="profile">
      <Profile />
    </Section>
    <Section className="cards">
      <Card />
    </Section>
    <Footer />
  </Main>
);
