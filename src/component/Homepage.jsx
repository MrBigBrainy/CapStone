import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./Header.jsx";
import Hero from "./Hero.jsx";
import Special from "./Special.jsx";
import Testimonial from "./Testimonial.jsx";
import AboutUs from "./AboutUs.jsx";
import Footer from "./Footer.jsx";
export default function Homepage() {
  return (
    <>
      
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
      
    </>
  );
}
