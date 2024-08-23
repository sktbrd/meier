'use client';

import History from "./History";
import { Box, Image, Text, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="gray.50"
      minHeight="100vh" // Ensure the content takes up at least the full height of the viewport
      p={4}
    >
      <VStack spacing={6} width="100%" maxWidth="1200px">
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color="gray.900"
          textAlign="center"
          m={5}
        >
          Bem vindo a história do MiniRamp Jadson Brian
        </Text>
        <Box width="100%" maxWidth="800px">
          <Image
            src="https://i.ibb.co/G7BKNPp/image.png"
            alt="MiniRamp"
            width="100%"
            height="auto"
            borderRadius={"10px"}
            boxShadow="md"
          />
        </Box>
        <History />
      </VStack>
    </Box>
  );
}
