import { HStack } from "@chakra-ui/react";

export default function Header() {
  return (
    <header>
      <nav>
        <ul style={{ listStyleType: "none" }}>
          <HStack spacing={10}>
            <li>Home</li>
            <li>Menu</li>
            <li>Reservation</li>
            <li>Order Online</li>
            <li>Login</li>
          </HStack>
        </ul>
      </nav>
    </header>
  );
}
