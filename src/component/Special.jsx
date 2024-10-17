import { Flex, Text, Box, Button, Grid } from "@chakra-ui/react";
import CardBox from "./CardBox";
import greekSaladImage from "../pictures/greekSalad.jpg";
import bruchetta from "../pictures/bruchetta.svg";
import lemonDessert from "../pictures/lemonDessert.jpg";
export default function Special () {
    return (
      <>
        <Flex
          alignItems={"top"}
          pt={10}
          pb={10}
          mt={100}
          justifyContent={"space-between"}
          ml={{ sm: "0px", md: "50px", lg: "0px" }}
        >
          <Text
            as={"h2"}
            fontSize={{ base: "3xl", sm: "5xl", md: "5xl" }}
            fontFamily={"Markazi"}
            fontWeight={"semibold"}
          >
            This Weeks Specials!
          </Text>
          <Box mt={4}>
            <Button
              as="button"
              bg="#F4CE1C"
              rounded={"5"}
              fontWeight={"bold"}
              display={{ base: "none", md: "flex" }}
            >
              Online Menu
            </Button>
          </Box>
        </Flex>
        <Grid
          templateColumns={{
            base: "repeat(0,1fr)",
            lg: "repeat(0, 1fr)",
            xl: "repeat(6, 1fr)",
          }}
          gap={"20px"}
        >
          <CardBox
            headline="Greek Salad"
            price="$12.99"
            imageSource={greekSaladImage}
            alternateText="Greek Salad"
            detail="The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosementary croustons"
          />
          <CardBox
            headline="Bruchetta"
            price="$5.99"
            imageSource={bruchetta}
            alternateText="Bruchetta"
            detail="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "
          />
          <CardBox
            headline="Lemon Dessert"
            price="$5.00"
            imageSource={lemonDessert}
            alternateText="Lemon Dessert"
            detail="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
          />
        </Grid>
      </>
    );
}

