import {
  Box,
  HStack,
  VStack,
  Text,
  Flex,
  List,
  UnorderedList,
  Image,
  Link,
} from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import logo from "../pictures/Logo.svg";
export default function Footer() {
  return (
    <>
      <Grid templateColumns="repeat(12, 1fr)" gap={6}>
        <GridItem colStart={4} colEnd={10}>
          <Box bg="#495E57" pt={10} pb={10} height={"300px"} as="footer">
            <Flex gap={"30px"}>
              <Image
                src={logo}
                alt="logo"
                objectFit={"contain"}
                height={"100px"}
                alignSelf={"center"}
                textAlign={"center"}
              />
              <Grid
                templateColumns={"repeat(3, 1fr)"}
                templateRows={"auto"}
                pt={5}
                pb={5}
                width={"100%"}
                justifyItems={"stretch"}
              >
                <Box>
                  <Text
                    as="h3"
                    fontWeight={"bold"}
                    color={"white"}
                    textAlign={"left"}
                  >
                    Doormat
                  </Text>
                  <Text
                    as="h3"
                    fontWeight={"bold"}
                    color={"white"}
                    mb="10px"
                    textAlign={"left"}
                  >
                    Navigation
                  </Text>
                </Box>
                <Text
                  as="h3"
                  fontWeight={"bold"}
                  color={"white"}
                  mb="10px"
                  textAlign={"left"}
                >
                  Contact
                </Text>
                <Text
                  as="h3"
                  fontWeight={"bold"}
                  color={"white"}
                  mb="10px"
                  textAlign={"left"}
                >
                  Social Media link
                </Text>
                <Flex flexDirection={"column"}>
                  <Link
                    href="#"
                    fontFamily={"Karla"}
                    color={"white"}
                    textAlign={"left"}
                  >
                    Home
                  </Link>
                  <Link
                    href="#"
                    fontFamily={"Karla"}
                    color={"white"}
                    textAlign={"left"}
                  >
                    About
                  </Link>
                  <Link
                    href="#"
                    fontFamily={"Karla"}
                    color={"white"}
                    textAlign={"left"}
                  >
                    Menu
                  </Link>
                  <Link
                    href="#"
                    fontFamily={"Karla"}
                    color={"white"}
                    textAlign={"left"}
                  >
                    Reservation
                  </Link>
                  <Link
                    href="#"
                    fontFamily={"Karla"}
                    color={"white"}
                    textAlign={"left"}
                  >
                    Order Online
                  </Link>
                  <Link
                    href="#"
                    fontFamily={"Karla"}
                    color={"white"}
                    textAlign={"left"}
                  >
                    Login
                  </Link>
                </Flex>

                <Flex flexDirection={"column"}>
                  <Link
                    href="#"
                    fontFamily={"Karla"}
                    color={"white"}
                    textAlign={"left"}
                  >
                    Address
                  </Link>
                  <Link
                    href="#"
                    fontFamily={"Karla"}
                    color={"white"}
                    textAlign={"left"}
                  >
                    Phone number
                  </Link>
                  <Link
                    href="#"
                    fontFamily={"Karla"}
                    color={"white"}
                    textAlign={"left"}
                  >
                    Email
                  </Link>
                </Flex>
                <Flex flexDirection={"column"}>
                  <Link
                    href="#"
                    fontFamily={"Karla"}
                    color={"white"}
                    textAlign={"left"}
                  >
                    Address
                  </Link>
                  <Link
                    href="#"
                    fontFamily={"Karla"}
                    color={"white"}
                    textAlign={"left"}
                  >
                    Phone number
                  </Link>
                  <Link
                    href="#"
                    fontFamily={"Karla"}
                    color={"white"}
                    textAlign={"left"}
                  >
                    Email
                  </Link>
                </Flex>
              </Grid>
            </Flex>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}


