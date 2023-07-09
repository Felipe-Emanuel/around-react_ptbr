import { APIProvider } from "../../contexts/APIContext";
import { Main } from "../Main";

export function App() {
  return (
    <APIProvider>
      <Main />
    </APIProvider>
  );
}
