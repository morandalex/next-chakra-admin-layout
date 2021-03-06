import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  Flex,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { Separator } from "../Separator/Separator";
import PropTypes from "prop-types";
import React from "react";
export default function Configurator(props) {
  const { secondary, isOpen, onClose, fixed, ...rest } = props;
  const { colorMode, toggleColorMode } = useColorMode();
  const settingsRef = React.useRef();
  return (
    <>
      <Drawer
        isOpen={props.isOpen}
        onClose={props.onClose}
        placement={document.documentElement.dir === "rtl" ? "left" : "right"}
        finalFocusRef={settingsRef}
        blockScrollOnMount={false}
      >
        <DrawerContent>
          <DrawerHeader pt="24px" px="24px">
            <DrawerCloseButton />
            <Text pb={10} fontSize="xl" fontWeight="bold" mt="16px">
              Configurator
            </Text>
            <Separator />
          </DrawerHeader>
          <DrawerBody w="340px" ps="24px" pe="40px">
            <Flex flexDirection="column">
                    
              <Flex
                justifyContent="space-between"
                alignItems="center"
                m={5}
              >
                <Text fontSize="md" fontWeight="600" mb="4px">
                  Dark/Light
                </Text>
                <Button onClick={toggleColorMode}>
                  Toggle {colorMode === "light" ? "Dark" : "Light"}
                </Button>
              </Flex>
         
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
Configurator.propTypes = {
  secondary: PropTypes.bool,
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  fixed: PropTypes.bool,
};
