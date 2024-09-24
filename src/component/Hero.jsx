import { Box, HStack, VStack, Text } from "@chakra-ui/react";

export default function Hero() {
  return (
    <>
      <Box bg="#495E57">
        <HStack>
            <VStack>
                <Text fontSize={"6xl"}>Little Lemon</Text>
                <Text>Chicago</Text>
                <Text>We are a family owned Mediterinean restaurant, focused on traditional recipes served with modern twist.</Text>
            </VStack>
        </HStack>
      </Box>
    </>
  );
}
