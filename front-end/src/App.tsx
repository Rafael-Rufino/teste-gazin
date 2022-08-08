import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout";
import { AuthContextProvider } from "./contexts/DeveloperContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Layout />
      </AuthContextProvider>
      <GlobalStyles />
    </>
  );
}

export default App;
