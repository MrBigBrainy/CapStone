import { Flex, Text, Image } from "@chakra-ui/react";
import chefA from "../pictures/chefA.jpg";
import chefB from "../pictures/chefB.jpg";
export default function AboutUs() {
  return (
    <>
      <Flex pt={10} pb={10} gap={"10px"} mt={"150px"} position={"relative"} mb={"100px"}>
        <Flex flexDirection={"column"} alignItems={"flex-start"} flex={1}>
          <Text
            as="h2"
            fontSize={"5xl"}
            fontWeight={"semibold"}
            fontFamily={"Markazi"}
            color={"#495E57"}
          >
            Little Lemon
          </Text>
          <Text
            as="h3"
            fontWeight={"medium"}
            fontFamily={"Markazi"}
            fontSize={"4xl"}
            textAlign={"left"}
            mb={"20px"}
            color={"#495E57"}
          >
            Chicago
          </Text>
          <Text textAlign={"left"} color="#333333" fontFamily={"Karla"}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Text>
          <Text textAlign={"left"} color="#333333" fontFamily={"Karla"}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </Text>
        </Flex>

        <Image
          src={chefA}
          height={"300px"}
          flex={2}
          objectFit={"contain"}
          alignSelf={"center"}
        />
        <Image
          src={chefB}
          height={"300px"}
          flex={2}
          objectFit={"contain"}
          position={"absolute"}
          right={0}
        />
      </Flex>
    </>
  );
}
