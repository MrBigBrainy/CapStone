
import './App.css';
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from './component/Homepage';
import BookingPage from "./component/BookingPage";
import Header from "./component/Header.jsx";
import Hero from "./component/Hero.jsx";
import Special from "./component/Special.jsx";
import Testimonial from "./component/Testimonial.jsx";
import AboutUs from "./component/AboutUs.jsx";
import Footer from "./component/Footer.jsx";

function App() {

  return (
    <ChakraProvider>
      <div className="App">
        <BrowserRouter>
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

            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route path="/booking">
                <BookingPage />
              </Route>
            </Switch>
            
          </Grid>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
