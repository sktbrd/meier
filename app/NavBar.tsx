'use client';
import {
    Box,
    Flex,
    HStack,
    Link as ChakraLink,
    Button,
    Stack,
    IconButton,
    useDisclosure,
    Collapse,
    useColorModeValue,
} from "@chakra-ui/react";
import { Link } from '@chakra-ui/next-js';
import { CiMenuBurger } from "react-icons/ci";
import { FaHome, FaRegWindowClose } from "react-icons/fa";

const Links = ["Sobre", "Projetos", "Agradecimentos", "Contato", "Jadson Brian"];

const NavLink = ({ children }: { children: string }) => (
    <Link
        href={`/${children.toLowerCase()}`}
        px={4}
        py={2}
        rounded={"md"}
        fontWeight={"semibold"}
        _hover={{
            textDecoration: "none",
            bg: useColorModeValue("teal.500", "teal.700"),
            color: useColorModeValue("white", "white"),
        }}
    >
        {children}
    </Link>
);

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const bgColor = useColorModeValue("gray.100", "gray.900");
    const boxShadow = useColorModeValue("md", "dark-lg");

    return (
        <Box bg={bgColor} px={6} boxShadow={boxShadow}>
            <HStack>
                <FaHome />
                <Link
                    href={`/`}
                    px={4}
                    py={2}
                    rounded={"md"}
                    fontWeight={"semibold"}
                    _hover={{
                        textDecoration: "none",
                        bg: useColorModeValue("teal.500", "teal.700"),
                        color: useColorModeValue("white", "white"),
                    }}
                >
                    Home
                </Link>

                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>

                    <HStack
                        as={"nav"}
                        display={{ base: "none", md: "flex" }}
                        spacing={8} alignItems={"space-between"}
                    >
                        {Links.map((link) => (
                            <NavLink key={link}>{link}</NavLink>
                        ))}
                    </HStack>

                </Flex>
            </HStack>

        </Box >
    );
}
