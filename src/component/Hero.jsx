import { Box, HStack, VStack, Text, Flex, Button } from "@chakra-ui/react";

export default function Hero() {
  return (
    <>
      <Box bg="#495E57" p={10}>
        <HStack display={"flex"} justifyContent={"center"}>
          <Box display={"flex"} justifyContent={"center"}>
            <Flex flexDirection={"column"} alignItems={"flex-start"}>
              <Text
                fontSize={"6xl"}
                color="#F4CE1C"
                fontFamily={"Markazi"}
                lineHeight={"0.8"}
                textAlign={"left"}
              >
                Little Lemon
              </Text>
              <Text
                fontFamily={"Markazi"}
                color="white"
                fontSize={"3xl"}
                marginBottom={"5"}
                textAlign={"left"}
              >
                Chicago
              </Text>
              <Text
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
              <Button bg="#F4CE1C" rounded={"5"} fontWeight={"bold"}>
                Reserve a Table
              </Button>
            </Flex>
          </Box>
        </HStack>
      </Box>
    </>
  );
}
