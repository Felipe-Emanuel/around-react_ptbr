import { Card } from "./components/Layout/Card";
import { Main } from "./components/Containers/Main";
import { Footer } from "./components/Layout/Footer";
import { Header } from "./components/Layout/Header.js";
import { Profile } from "./components/Layout/Profile";
import { Section } from "./components/Containers/Section";
import { APIProvider } from "./data/contexts/APIContext";

function App() {
  return (
    <APIProvider>
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
    </APIProvider>
  );
}

export default App;
