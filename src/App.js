import { APIProvider } from "./data/contexts/APIContext";
import { Main } from "./components/Layout/Main";

function App() {
  return (
    <APIProvider>
      <Main />
    </APIProvider>
  );
}

export default App;
