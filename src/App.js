
import './App.css';
import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
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
        <Grid
        templateColumns={{
          sm: "repeat(6, 1fr)",
          md: "repeat(8, 1fr)",
          lg: "repeat(12, 1fr)",
        }}
        gap={6}
      >
        <Homepage></Homepage>
      </Grid>
      </div>
    </ChakraProvider>
  );
}

export default App;
/*
<Routes>
           <Route path="/" element={<Homepage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
        */