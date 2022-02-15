import React from "react";
import { Flex, Link, List, ListItem, Text } from "@chakra-ui/react";
export default function Footer(props) {
    return (
    <Flex
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent="space-around"
      px="30px"
      pb="20px"
    >
      <Text
        color="gray.400"
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}
      >
        &copy; {1900 + new Date().getYear()},{" "}
        <Text as="span">
          Made with ❤️ by 
        </Text>
        <Link
          // color={linkTeal}
          color="teal.400"
          href="#"
          target="_blank"
        >
       &nbsp;Alessandro Morandi&nbsp;
        </Link>
      
      for a better web
      </Text>
      <List display="flex">
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          <Link color="gray.400" href="#">
          Company
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          <Link color="gray.400" href="#">
          Company
          </Link>
        </ListItem>
        <ListItem
          me={{
            base: "20px",
            md: "44px",
          }}
        >
          <Link
            color="gray.400"
            href="#blog"
           
          >
           Blog
          </Link>
        </ListItem>
        <ListItem>
          <Link
            color="gray.400"
            href="#license"
            
          >
         License
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}
