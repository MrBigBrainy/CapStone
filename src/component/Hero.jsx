import {
  Box,
  HStack,
  VStack,
  Text,
  Flex,
  Button,
  Image,
} from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import restaurantFood from "../pictures/restauranfood.jpg";

export default function Hero() {
  return (
    <>
      <Grid
        templateColumns={{
          sm: "repeat(6, 1fr)",
          md: "repeat(8, 1fr)",
          lg: "repeat(12, 1fr)",
        }}
        gap={6}
      >
        <GridItem
          colStart={{ base: 2, md: 1, lg:3, xl: 4 }}
          colEnd={{ base: 8, md: 8, lg: 11,xl: 11, "2xl": 10 }}
          ml={{md: "50px"}}
        >
          <Box bg="#495E57" pt={10} pb={10} height={"370px"} as="section">
            <HStack display={"flex"} justifyContent={"space-between"}>
              <Flex
                direction={{ base: "column", md: "row" }}
                justifyContent={"space-between"}
                width={"100%"}
                g
              >
                <Flex flexDirection={"column"} alignItems={"flex-start"}>
                  <Text
                    as="h1"
                    fontSize={"5xl"}
                    color="#F4CE1C"
                    fontFamily={"Markazi"}
                    lineHeight={"0.8"}
                    textAlign={"left"}
                  >
                    Little Lemon
                  </Text>
                  <Text
                    as="h2"
                    fontFamily={"Markazi"}
                    color="white"
                    fontSize={"4xl"}
                    marginBottom={"5"}
                    textAlign={"left"}
                  >
                    Chicago
                  </Text>
                  <Text
                    as="p"
                    fontFamily={"Karla"}
                    color="white"
                    fontSize={"xl"}
                    textAlign={"left"}
                    w={300}
                    marginBottom={5}
                  >
                    We are a family owned Mediterinean restaurant, focused on
                    traditional recipes served with modern twist.
                  </Text>
                  <Button
                    as="button"
                    bg="#F4CE1C"
                    rounded={"5"}
                    fontWeight={"bold"}
                  >
                    Reserve a Table
                  </Button>
                </Flex>
                <Image
                  as="img"
                  src={restaurantFood}
                  alt={"restaurant food"}
                  width={"320px"}
                  height={"400px"}
                  rounded={10}
                  display={{ base: "none", sm: "none", md: "flex" }}
                  justifySelf={"flex-end"}
                />
              </Flex>
            </HStack>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}
