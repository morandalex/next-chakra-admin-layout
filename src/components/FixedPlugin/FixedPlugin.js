import React from "react";
import { Button, useColorModeValue } from "@chakra-ui/react";
import { SettingsIcon } from "../Icons/Icons";
import PropTypes from "prop-types";
export default function FixedPlugin(props) {
  let navbarIcon = useColorModeValue("gray.500", "gray.200");
  let bgButton = useColorModeValue("white", "gray.600");
  const settingsRef = React.useRef();
  return (
    <>
      <Button
        h="52px"
        w="52px"
        onClick={props.onOpen}
        bg={bgButton}
        position="fixed"
        variant="no-hover"
        bottom="90px"
        right="65px"
        borderRadius="50px"
        boxShadow="0 2px 12px 0 rgb(0 0 0 / 16%)"
      >
        <SettingsIcon
          cursor="pointer"
          ref={settingsRef}
          color={navbarIcon}
          w="20px"
          h="20px"
        />
      </Button>
     
    </>
  );
}
FixedPlugin.propTypes = {
  onOpen:PropTypes.func,
  fixed: PropTypes.bool,
  onChange: PropTypes.func,
  onSwitch: PropTypes.func,
};
