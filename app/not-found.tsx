// app/not-found.tsx

'use client';

import { Box, Heading, Text, Button, Image } from '@chakra-ui/react';
import Link from 'next/link';

export default function NotFound() {
    return (
        <Box
            textAlign="center"
            py={10}
            px={6}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
            bg="gray.100"
        >
            <Heading
                display="inline-block"
                as="h1"
                size="4xl"
                bgGradient="linear(to-r, teal.400, teal.600)"
                backgroundClip="text"
            >
                404
            </Heading>
            <Text fontSize="xl" mt={3} mb={2}>
                A página que você está procurando não foi encontrada.
            </Text>
            <Text color={'gray.500'} mb={6}>
                Tá Perdido é?
            </Text>
            <Image borderRadius={5} src="https://media.tenor.com/aKmzjoUkRycAAAAM/skateboard-trick.gif" alt="404" width="100%" maxWidth="400px" />
            <Link href="/" passHref>
                <Button
                    colorScheme="teal"
                    bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
                    color="white"
                    variant="solid"
                    mt={6}
                >
                    Voltar
                </Button>
            </Link>
        </Box>
    );
}
