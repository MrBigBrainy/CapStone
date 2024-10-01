import {
  Box,
  HStack,
  VStack,
  Text,
  Flex,
  Button,
  Image,
} from "@chakra-ui/react";
import restaurantFood from "../pictures/restauranfood.jpg";

export default function Hero() {
  return (
    <>
      <Box bg="#495E57" p={10} height={"370px"} as="section">
        <HStack display={"flex"} justifyContent={"center"}>
          <Flex
            direction={{base: "column", md: "row"}}
            justifyContent={"center"}
            position={"relative"}
            gap={20}
          >
            <Flex flexDirection={"column"} alignItems={"flex-start"}>
              <Text
                as="h1"
                fontSize={"6xl"}
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
                fontSize={"3xl"}
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
              width="320px"
              height="400px"
              rounded={10}
              order={{base: 2, md: 1}}
            />
          </Flex>
        </HStack>
      </Box>
    </>
  );
}
