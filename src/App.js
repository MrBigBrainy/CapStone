
import './App.css';
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import Header from "./component/Header.jsx";
import Hero from './component/Hero.jsx';
import Special from './component/Special.jsx';
import Testimonial from './component/Testimonial.jsx';
import AboutUs from "./component/AboutUs.jsx";
import Footer from './component/Footer.jsx';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Grid
          templateColumns={{
            sm: "repeat(6, 1fr)",
            md: "repeat(8, 1fr)",
            lg: "repeat(12, 1fr)",
          }}
          gap={6}
        >
          <GridItem
            colStart={{ base: 2, md: 1, lg: 3, xl: 4 }}
            colEnd={{ base: 8, sm: 6, md: 8, lg: 11, xl: 11, "2xl": 10 }}
          >
            <Header />
          </GridItem>
          <GridItem
            colStart={{ base: 1 }}
            colEnd={{ base: 7, md: 9, lg: 13 }}
            backgroundColor={"#495E57"}
          >
            <Hero />
          </GridItem>
          <GridItem
            colStart={{ base: 2, md: 1, lg: 3, xl: 4 }}
            colEnd={{ base: 8, sm: 6, md: 8, lg: 11, xl: 11, "2xl": 10 }}
          >
            <Special />
          </GridItem>
          <GridItem
            colStart={{ base: 2, md: 1, lg: 3, xl: 4 }}
            colEnd={{ base: 8, sm: 6, md: 8, lg: 11, xl: 11, "2xl": 10 }}
          >
            <Testimonial />
          </GridItem>
          <GridItem
            colStart={{ base: 2, md: 1, lg: 3, xl: 4 }}
            colEnd={{ base: 8, sm: 6, md: 8, lg: 11, xl: 11, "2xl": 10 }}
          >
            <AboutUs />
          </GridItem>
          <GridItem
            colStart={{ base: 1 }}
            colEnd={{ base: 7, md: 9, lg: 13 }}
            backgroundColor={"#495E57"}
          >
            <Footer />
          </GridItem>
        </Grid>
      </div>
    </ChakraProvider>
  );
}

export default App;
