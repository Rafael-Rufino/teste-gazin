import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout";
import { DevelopersContextProvider } from "./contexts/DeveloperContext";

function App() {
  return (
    <>
      <DevelopersContextProvider>
        <Layout />
      </DevelopersContextProvider>
      <GlobalStyles />
    </>
  );
}

export default App;
