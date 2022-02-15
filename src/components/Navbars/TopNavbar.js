import React from "react";
import NextLink from "next/link"
import {
    Stack,
    Heading,
    HStack,
    Icon,
    IconButton,
    Link,
    useColorMode,
    useColorModeValue,
    useDisclosure,
    CloseButton,
    Box,
    VStack,
    Button,
} from "@chakra-ui/react";
import { useViewportScroll } from "framer-motion";
import { FaMoon, FaSun, FaHeart } from "react-icons/fa";
import {
    AiOutlineMenu,
} from "react-icons/ai";
export default function App() {
    const mobileNav = useDisclosure();
    const { toggleColorMode: toggleMode } = useColorMode();
    const text = useColorModeValue("dark", "light");
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);
    const bg = useColorModeValue("white", "gray.800");
    const ref = React.useRef();
    const [y, setY] = React.useState(0);
    const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {};
    const { scrollY } = useViewportScroll();
    React.useEffect(() => {
        return scrollY.onChange(() => setY(scrollY.get()));
    }, [scrollY]);
    const MobileNavContent = (
        <VStack
            zIndex="dropdown"
            pos="absolute"
            top={0}
            left={0}
            right={0}
            display={mobileNav.isOpen ? "flex" : "none"}
            flexDirection="column"
            p={2}
            pb={4}
            m={2}
            bg={bg}
            spacing={3}
            rounded="sm"
            shadow="sm"
        >
            <CloseButton
                aria-label="Close menu"
                justifySelf="self-start"
                onClick={mobileNav.onClose}
            />
            <NextLink href="/">
                <Link>Home</Link>
            </NextLink>
            <NextLink href="/about">
                <Link>About</Link>
            </NextLink>
            <NextLink href="/docs">
                <Link>Docs</Link>
            </NextLink>
        </VStack>
    );
    return (<>
        <Box
            pt='5'
            pr='50'
            pl='50'
            pb='5'
        >
            <Stack spacing={2}>
                <Stack
                    spacing={2}
                    justifyContent="space-between"
                    alignItems="center"
                    flexDirection="row"
                    display="flex"
                >
                    <Box >
                        <NextLink href="/">
                            <Link>
                                <Heading size="md">NEXT CHAKRA ADMIN</Heading>
                            </Link>
                        </NextLink>
                    </Box>
                    <Box >
                        <HStack
                            spacing="5"
                            display={{ sm: "none", md: "flex" }}
                            alignItems="center"
                            isInline
                            mr={10}
                            ml={10}
                        >
                            <HStack spacing={4}>
                                <NextLink href="/">
                                    <Link>Home</Link>
                                </NextLink>
                                <NextLink href="/about">
                                    <Link>About</Link>
                                </NextLink>
                                <NextLink href="/docs">
                                    <Link>Docs</Link>
                                </NextLink>
                            </HStack>
                        </HStack>
                    </Box>
                    <Box >
                        <IconButton
                            size="md"
                            fontSize="lg"
                            aria-label={`Switch to ${text} mode`}
                            variant="ghost"
                            color="current"
                            ml={{ base: "0", md: "3" }}
                            onClick={toggleMode}
                            icon={<SwitchIcon />}
                        />
                        <IconButton
                            display={{ base: "flex", md: "none" }}
                            aria-label="Open menu"
                            fontSize="20px"
                            color={useColorModeValue("gray.800", "inherit")}
                            variant="ghost"
                            icon={<AiOutlineMenu />}
                            onClick={mobileNav.onOpen}
                        />
                    </Box>
                </Stack>
            </Stack>
            {MobileNavContent}
        </Box>
    </>);
};
