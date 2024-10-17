import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Text,
  Heading,
  GridItem,
  Flex,
  Image,
  Icon,
  Box,
} from "@chakra-ui/react";
import { TbMotorbike } from "react-icons/tb";

export default function CardBox({
  headline,
  price,
  imageSource,
  alternateText,
  detail,
}) {
  return (
    <GridItem
      colSpan={{ base: 3, sm: 3, md: 2 }}
      colStart={{ sm: 2 }}
      justifyContent={"center"}
    >
      <Card
        borderRadius={"lg"}
        width={{ base: "300px", md: "100%" }}
        mb={10}
        height={{ xl: "550px" }}
        ml={{ sm: "0px", md: "50px", lg: "0px" }}
        className="Test2154854"
      >
        <Flex
          flexDirection={{
            base: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "column",
          }}
          height="100%" // Ensure Flex takes full height
        >
          <Image
            src={imageSource}
            alt={alternateText}
            borderRadius={"lg"}
            objectFit="cover"
            height={{ md: "265px", xl: "175px" }} // Set height to 100%
            width={{ md: "290px", xl: "100%" }} // Adjust as needed
          />
          <Box
            flex="1"
            display={{ md: "flex" }}
            flexDirection={{ md: "column" }}
            height={{ md: "265px", xl: "100%" }} // Ensure Box takes full height
            
          >
            <CardHeader bg={"#EDEFEE"}>
              <Flex justifyContent={"space-between"}>
                <Heading size="md" fontFamily={"Karla"}>
                  {headline}
                </Heading>
                <Text
                  size="md"
                  fontWeight={"bold"}
                  color={"#EE9972"}
                  fontFamily={"Karla"}
                >
                  {price}
                </Text>
              </Flex>
            </CardHeader>
            <CardBody bg={"#EDEFEE"}>
              <Text textAlign={"left"} color="#333333" fontFamily={"Karla"}>
                {detail}
              </Text>
            </CardBody>

            <CardFooter bg={"#EDEFEE"}>
              <Flex gap={3}>
                <Text
                  fontWeight={"bold"}
                  fontFamily={"Karla"}
                  mt={5}
                  fontSize={"lg"}
                  textAlign={"left"}
                  alignSelf={"flex-end"}
                >
                  Order Delivery
                </Text>
                <Icon
                  as={TbMotorbike}
                  boxSize={5}
                  alignSelf={"flex-end"}
                  mb={1}
                />
              </Flex>
            </CardFooter>
          </Box>
        </Flex>
      </Card>
    </GridItem>
  );
}
