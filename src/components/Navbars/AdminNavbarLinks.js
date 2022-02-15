import {
  Flex,
} from "@chakra-ui/react";
import { SidebarResponsive } from "../Sidebar/Sidebar";
import PropTypes from "prop-types";
import React from "react";
import routes from "../../helpers/routes.js";
export default function AdminNavbarLinks(props) {
  const { variant, children, fixed, secondary, onOpen, ...rest } = props;
  if (secondary) {
    navbarIcon = "white";
    mainText = "white";
  }
  return (
    <Flex
      pe={{ sm: "0px", md: "16px" }}
      w={{ sm: "100%", md: "auto" }}
      alignItems="center"
      flexDirection="row"
    >
     <SidebarResponsive
        logoText={props.logoText}
        secondary={props.secondary}
        routes={routes}
        {...rest}
      />
    </Flex>
  );
}
AdminNavbarLinks.propTypes = {
  variant: PropTypes.string,
  fixed: PropTypes.bool,
  secondary: PropTypes.bool,
  onOpen: PropTypes.func,
};