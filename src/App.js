import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./component/Header.jsx";
import Hero from './component/Hero.jsx';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Header />
        <Hero />
      </div>
    </ChakraProvider>
  );
}

export default App;
