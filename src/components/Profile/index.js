import { Avatar } from "./Avatar";
import { useEffect } from "react";
import { ProfileHeader } from "../ProfileHeader";
import { useApiContext } from "../../data/hooks/useApiContext";

export const Profile = () => {
  const { profile, getUserProfile } = useApiContext();
  const { name, about, avatar } = profile;

  useEffect(() => {
    getUserProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="profile">
      <Avatar avatar={avatar} />
      <ProfileHeader name={name} about={about} />
    </section>
  );
};
