import { Flex, Text, Box, Button, Grid } from "@chakra-ui/react";
import Review from "./Review";
export default function Testimonial() {
  return (
    <>
      <Text
        as={"h2"}
        fontSize={"5xl"}
        fontFamily={"Markazi"}
        fontWeight={"semibold"}
        mb={"20px"}
      >
        Testimonials
      </Text>
      <Grid templateColumns="repeat(6, 1fr)" gap={"15px"}>
        <Review name={"Jonathan Burger"} review={"This is INSANE!!!"} />
        <Review
          name={"Anchari Junjareon"}
          review={"OMG!!! WTF! Too Delicious!"}
        />
        <Review
          name={"MyDragon ZeroUnited"}
          review={"I will come back again!"}
        />
      </Grid>
    </>
  );
}
