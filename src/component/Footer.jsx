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
      <Grid
        templateColumns={{
          sm: "repeat(6, 1fr)",
          md: "repeat(8, 1fr)",
          lg: "repeat(12, 1fr)",
        }}
        gap={6}
        pb={"50px"}
        
      >
        <GridItem
          colStart={{ sm: 1, md: 2, lg: 2, xl: 4 }}
          colEnd={{ sm: 7, md: 8, lg: 11, xl: 10 }}
          ml={{ sm: "20px", md: "0px", lg: "0px" }}
        >
          <Box bg="#495E57" pt={10} pb={10} height={"400px"} as="footer">
            <Flex gap={"30px"} flexDirection={{ sm: "column" }}>
              <Image
                src={logo}
                alt="logo"
                objectFit={"contain"}
                height={{ lg: "50px", xl: "100px" }}
                alignSelf={"center"}
                textAlign={"center"}
              />
              <Grid
                templateColumns={{ base: "repeat(3, 1fr)" }}
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


