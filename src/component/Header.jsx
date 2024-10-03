import {
  Link,
  HStack,
  Image,
  Box,
  Collapse,
  VStack,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import logo from "../pictures/Logo.svg";

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box p={5} as="header">
      <nav>
        <Flex
          justify={{ base: "space-between", md: "center" }}
          gap={10}
          width="full"
        >
          <Image src={logo} alt="Logo" />

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
        </Flex>
        <Collapse in={isOpen} animateOpacity duration={5}>
          <VStack
            spacing={4}
            bg="#fff"
            p={4}
            display={{ base: "flex", md: "none" }}
            position="absolute"
            right={0}
            left={0}
            zIndex={100}
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
