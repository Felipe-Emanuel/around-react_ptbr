import { useContext } from "react";
import { APIProvider } from "../contexts/APIContext";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { Main } from "./Main";

export function App() {
    const { currentUser, setCurrentUser, updateProfileInfo, patchAvatar } =
    useContext(CurrentUserContext);

  return (
    <APIProvider>
        <Main
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          updateProfileInfo={updateProfileInfo}
          patchAvatar={patchAvatar}
        />
    </APIProvider>
  );
}
