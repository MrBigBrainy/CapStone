import { Flex, Text, Box, Button, Grid } from "@chakra-ui/react";
import CardBox from "./CardBox";
import greekSaladImage from "../pictures/greekSalad.jpg";
import bruchetta from "../pictures/bruchetta.svg";
export default function Special () {
    return (
      <>
        <Flex
          alignItems={"top"}
          pt={10}
          pb={10}
          mt={100}
          justifyContent={"space-between"}
        >
          <Text
            as={"h2"}
            fontSize={"5xl"}
            fontFamily={"Markazi"}
            fontWeight={"semibold"}
          >
            This Weeks Specials!
          </Text>
          <Box mt={4}>
            <Button as="button" bg="#F4CE1C" rounded={"5"} fontWeight={"bold"}>
              Online Menu
            </Button>
          </Box>
        </Flex>
        <Grid templateColumns="repeat(6, 1fr)">
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
        </Grid>
      </>
    );
}