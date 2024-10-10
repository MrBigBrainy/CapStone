import { Flex, Text, VStack, Box, Button } from "@chakra-ui/react";
import CardBox from "./CardBox";
export default function Special () {
    return (
      <>
        <Flex justifyContent={"center"} alignItems={"top"} p={10} mt={100}>
          <VStack>
            <Text
              as={"h2"}
              fontSize={"5xl"}
              fontFamily={"Markazi"}
              fontWeight={"semibold"}
            >
              This Weeks Specials
            </Text>
            <CardBox />
          </VStack>
          <Box w={"300px"} mt={4}>
            <Button as="button" bg="#F4CE1C" rounded={"5"} fontWeight={"bold"}>
              Online Menu
            </Button>
          </Box>
        </Flex>
      </>
    );
}