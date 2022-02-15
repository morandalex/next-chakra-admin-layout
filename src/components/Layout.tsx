import React, { useState } from "react";
import {
  Box
} from '@chakra-ui/react'
import { useRouter } from "next/router";
import { Portal, useDisclosure } from "@chakra-ui/react";
import Configurator from "./Configurator/Configurator";
import Footer from "./Footer/Footer.js";
import AdminNavbar from "./Navbars/AdminNavbar.js";
import Sidebar from "./Sidebar/Sidebar.js";
import routes from "../helpers/routes.js";
import FixedPlugin from "./FixedPlugin/FixedPlugin";
import MainPanel from "./Layout/MainPanel";
import PanelContainer from "./Layout/PanelContainer";
import PanelContent from "./Layout/PanelContent";
import TopNavbar from "./Navbars/TopNavbar";
interface LayoutProps {
  children?: any;
  props?: any;
}
export default function Layout(LayoutProps) {
  const router = useRouter();
  const { ...rest } = LayoutProps.props;
  const [fixed, setFixed] = useState(false);
  const mainPanel = React.createRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <TopNavbar></TopNavbar>
      <Sidebar
        routes={routes}
        logoText={""}
        display="none"
        sidebarVariant={'opaque'}
        {...rest}
      />
      <MainPanel
        refs={mainPanel}
        w={{
          base: "100%",
          xl: "calc(100% - 275px)",
        }}
      >
        <Portal>
          <AdminNavbar
            onOpen={onOpen}
            logoText={"DARKEIDE"}
            brandText={router.pathname}
          
            fixed={fixed}
            {...rest}
          />
        </Portal>
        <PanelContent m='3' pt="100px">
          <PanelContainer>
            <Box borderWidth="4px" borderStyle="dashed" rounded="md" h="800" >
              <main>{LayoutProps.children}</main>
            </Box>
          </PanelContainer>
        </PanelContent>
        <Footer />
        <Portal>
          <FixedPlugin
            fixed={fixed}
            onOpen={onOpen}
          />
        </Portal>
        <Configurator
          isOpen={isOpen}
          onClose={onClose}
        />
      </MainPanel>
    </>
  )
}