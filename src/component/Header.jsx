import { Link, HStack, Image, Box } from "@chakra-ui/react";
import logo from "../pictures/Logo.svg"

export default function Header() {
  return (
    <Box p={5} display={"flex"} justifyContent={"center"}>
      <nav>
        <ul style={{ listStyleType: "none" }}>
          <HStack spacing={10}>
            <Image src={logo} />
            <Link href="#" fontFamily="Karla, sans-serif" fontSize="lg" fontWeight={"bold"} color={"#495E57"}>
              Home
            </Link>
            <Link href="#" fontFamily="Karla, sans-serif" fontSize="lg" fontWeight={"bold"} color={"#495E57"}>Menu</Link>
            <Link href="#" fontFamily="Karla, sans-serif" fontSize="lg" fontWeight={"bold"} color={"#495E57"}>Reservation</Link>
            <Link href="#" fontFamily="Karla, sans-serif" fontSize="lg" fontWeight={"bold"} color={"#495E57"}>Order Online</Link>
            <Link href="#" fontFamily="Karla, sans-serif" fontSize="lg" fontWeight={"bold"} color={"#495E57"}>Login</Link>
          </HStack>
        </ul>
      </nav>
    </Box>
  );
}
