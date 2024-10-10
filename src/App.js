import logo from './logo.svg';
import './App.css';
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import Header from "./component/Header.jsx";
import Hero from './component/Hero.jsx';
import Special from './component/Special.jsx';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Grid templateColumns="repeat(12, 1fr)" gap={6}>
          <GridItem colStart={4} colEnd={11}>
            <Header />
          </GridItem>
          <GridItem colStart={1} colEnd={13}>
            <Hero />
          </GridItem>
          <GridItem colStart={2} colEnd={11}>
            <Special />
          </GridItem>
        </Grid>
      </div>
    </ChakraProvider>
  );
}

export default App;
