import { FaCircleUser } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
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
  HStack,
} from "@chakra-ui/react";
export default function Review({name, review}) {
  return (
    <>
      <GridItem colSpan={2} mb={"30px"}>
        <Card>
          <CardBody>
            <Flex justifyContent={"flex-start"}>
              <Icon as={FaStar} boxSize={7} color={"#F4CE1C"} />
              <Icon as={FaStar} boxSize={7} color={"#F4CE1C"} />
              <Icon as={FaStar} boxSize={7} color={"#F4CE1C"} />
              <Icon as={FaStar} boxSize={7} color={"#F4CE1C"} />
              <Icon as={FaStar} boxSize={7} color={"#F4CE1C"} />
            </Flex>
          </CardBody>
          <CardBody>
            <HStack>
              <Icon as={FaCircleUser} boxSize={50} color={"#495E57"} />
              <Text fontWeight={"bold"} fontSize={"lg"} color={"#495E57"}>
                {name}
              </Text>
            </HStack>
          </CardBody>
          <CardFooter>
            <Text
              fontFamily={"Karla"}
              fontSize={"lg"}
              fontWeight={"semibold"}
              color={"#495E57"}
            >
              " {review} "
            </Text>
          </CardFooter>
        </Card>
      </GridItem>
    </>
  );
}
