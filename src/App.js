
import './App.css';
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import Header from "./component/Header.jsx";
import Hero from './component/Hero.jsx';
import Special from './component/Special.jsx';
import Testimonial from './component/Testimonial.jsx';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Grid templateColumns="repeat(12, 1fr)" gap={6}>
          <GridItem colStart={4} colEnd={10}>
            <Header />
          </GridItem>
          <GridItem colStart={1} colEnd={13} backgroundColor={"#495E57"}>
            <Hero />
          </GridItem>
          <GridItem colStart={4} colEnd={10}>
            <Special />
          </GridItem>
          <GridItem colStart={4} colEnd={10}>
            <Testimonial />
          </GridItem>
        </Grid>
      </div>
    </ChakraProvider>
  );
}

export default App;
