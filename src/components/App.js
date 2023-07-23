import { APIProvider } from "../contexts/APIContext";
import { CurrentUserContextProvider } from "../contexts/CurrentUserContext";
import { Main } from "./Main";

export function App() {
  return (
    <APIProvider>
      <CurrentUserContextProvider>
        <Main />
      </CurrentUserContextProvider>
    </APIProvider>
  );
}
