import {
  Card,
  CardBody,
  CardHeader,
  Text,
  Heading,
  GridItem,
  Flex,
  Image,
  Icon,
  HStack
} from "@chakra-ui/react";
import { TbMotorbike } from "react-icons/tb";
export default function CardBox({headline, price, imageSource, alternateText, detail}) {
  return (
    <GridItem colSpan={2}>
      <Card borderRadius={"lg"} width={"300px"} mb={10}>
        <Image src={imageSource} alt={alternateText} />
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
        <CardBody bg={"#EDEFEE"} height={"210px"}>
          <Text textAlign={"left"} color="#333333" fontFamily={"Karla"}>
            {detail}
          </Text>
          <Flex gap={3}>
            <Text
              fontWeight={"bold"}
              fontFamily={"Karla"}
              mt={5}
              fontSize={"lg"}
              textAlign={"left"}
            >
              Order Delivery
            </Text>
            <Icon as={TbMotorbike} boxSize={5} alignSelf={"flex-end"} mb={1} />
          </Flex>
        </CardBody>
      </Card>
    </GridItem>
  );
}
