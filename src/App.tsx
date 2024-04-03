import { GlobalStyles } from "./Global.styled";
import Layout from "./components/Layout";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <GlobalStyles />
      <Toaster />
      <Layout />
    </>
  );
}

export default App;
