import { Flex, Text, Image, Box} from "@chakra-ui/react";
import chefA from "../pictures/chefA.jpg";
import chefB from "../pictures/chefB.jpg";
export default function AboutUs() {
  return (
    <>
      <Flex
        pt={10}
        pb={10}
        gap={{ base: "30px", xl: "10px", lg: "30px" }}
        mt={{ base: "50px", xl: "150px" }}
        mb={"100px"}
        flexDirection={{ base: "column", xl: "row", "2xl": "row" }}
        position={"relative"}
        ml={{ sm: "0px", md: "50px", lg: "0px" }}
      >
        <Flex flexDirection={"column"} alignItems={"flex-start"} flex={1}>
          <Text
            as="h2"
            fontSize={{base: "5xl", xl:"45x"}}
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
            fontSize={{base: "4xl", xl: "2xl"}}
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
          height={{base: "100%",xl:"300px"}}
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
          display={{ base: "none", lg: "none", xl: "block" }}
        />
      </Flex>
    </>
  );
}
