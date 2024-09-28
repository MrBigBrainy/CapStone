import {
  Link,
  HStack,
  Image,
  Box,
  Collapse,
  VStack,
  IconButton,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import logo from "../pictures/Logo.svg";

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box p={5} display={"flex"} justifyContent={"center"} as="header">
      <nav>
        <Flex justify={{ base: "space-between", md: "center" }} align="center">
          <HStack spacing={10}>
            <Image src={logo} />
            <Spacer display={{ base: "none", md: "flex" }} />

            <HStack spacing={10} display={{ base: "none", md: "flex" }}>
              <Link
                href="#"
                fontFamily="Karla, sans-serif"
                fontSize="lg"
                fontWeight={"bold"}
                color={"#495E57"}
              >
                Home
              </Link>
              <Link
                href="#"
                fontFamily="Karla, sans-serif"
                fontSize="lg"
                fontWeight={"bold"}
                color={"#495E57"}
              >
                Menu
              </Link>
              <Link
                href="#"
                fontFamily="Karla, sans-serif"
                fontSize="lg"
                fontWeight={"bold"}
                color={"#495E57"}
              >
                Reservation
              </Link>
              <Link
                href="#"
                fontFamily="Karla, sans-serif"
                fontSize="lg"
                fontWeight={"bold"}
                color={"#495E57"}
              >
                Order Online
              </Link>
              <Link
                href="#"
                fontFamily="Karla, sans-serif"
                fontSize="lg"
                fontWeight={"bold"}
                color={"#495E57"}
              >
                Login
              </Link>
            </HStack>

            <IconButton
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              display={{ md: "none" }}
              onClick={onToggle}
              colorScheme="teal"
            />
          </HStack>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <VStack
            spacing={4}
            bg="#fff"
            p={4}
            display={{ md: "none" }} // Hide on medium screens and up
            position="absolute"
            right={0}
            left={0}
            zIndex={10}
          >
            <Link
              href="#"
              fontFamily="Karla, sans-serif"
              fontSize="lg"
              fontWeight={"bold"}
              color={"#495E57"}
            >
              Home
            </Link>
            <Link
              href="#"
              fontFamily="Karla, sans-serif"
              fontSize="lg"
              fontWeight={"bold"}
              color={"#495E57"}
            >
              Menu
            </Link>
            <Link
              href="#"
              fontFamily="Karla, sans-serif"
              fontSize="lg"
              fontWeight={"bold"}
              color={"#495E57"}
            >
              Reservation
            </Link>
            <Link
              href="#"
              fontFamily="Karla, sans-serif"
              fontSize="lg"
              fontWeight={"bold"}
              color={"#495E57"}
            >
              Order Online
            </Link>
            <Link
              href="#"
              fontFamily="Karla, sans-serif"
              fontSize="lg"
              fontWeight={"bold"}
              color={"#495E57"}
            >
              Login
            </Link>
          </VStack>
        </Collapse>
      </nav>
    </Box>
  );
}
