import { Card } from "./Card";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Section } from "./Containers/Section";
import { Container } from "./Containers/Container";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { Avatar } from "./Avatar";
import { ProfileHeader } from "./ProfileHeader";

export function Main() {
  const { currentUser, setCurrentUser, updateProfileInfo, patchAvatar } =
    useContext(CurrentUserContext);

  return (
    <Container>
      <Header />
      <Section className="profile">
        <Avatar patchAvatar={patchAvatar} avatar={currentUser.avatar} />
        <ProfileHeader
          updateCurrentUser={setCurrentUser}
          updateProfileInfo={updateProfileInfo}
          name={currentUser.name}
          about={currentUser.about}
        />
      </Section>
      <Section className="cards">
        <Card />
      </Section>
      <Footer />
    </Container>
  );
}
