import "./App.css";
import HomePage from "./pages/Hompage";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <HomePage />
      </div>
    </ChakraProvider>
  );
}

export default App;
