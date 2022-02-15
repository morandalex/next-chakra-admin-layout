import { QuestionIcon } from "@chakra-ui/icons";
import { Button, Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link"
import IconBox from "../Icons/IconBox";
import React from "react";
export function SidebarHelp(props) {
  const { children, ...rest } = props;
  return (
    <Flex
      borderRadius="15px"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="start"
      boxSize="border-box"
      p="16px"
      h="170px"
      w="100%"
    >
      <IconBox width="35px" h="35px" bg="white" mb="auto">
        <QuestionIcon color="teal.300" h="18px" w="18px" />
      </IconBox>
      <Text fontSize="sm" color="gray.500" fontWeight="bold">
        Need help?
      </Text>
      <Text fontSize="xs" color="gray.500" mb="10px">
        Please check our docs
      </Text>
      <NextLink href='/docs'>
        <Link w='100%'>
          <Text my="auto" fontSize="sm">
            <Button
              fontSize="10px"
              fontWeight="bold"
              w="100%"
              bg="teal.300"
              _hover="none"
              _active={{
                bg: "white",
                transform: "none",
                borderColor: "transparent",
              }}
              _focus={{
                boxShadow: "none",
              }}
              color="gray.800"
            >
              DOCUMENTATION BUTTON
            </Button>
          </Text>
        </Link>
      </NextLink>
    </Flex>
  );
}