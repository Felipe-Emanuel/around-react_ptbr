import { Gallery } from "./components/Layout/App";
import { APIProvider } from "./data/contexts/APIContext";

function App() {
  return (
    <APIProvider>
      <Gallery />
    </APIProvider>
  );
}

export default App;
