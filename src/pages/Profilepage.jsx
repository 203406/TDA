// import React from 'react'
import { Box, Center, chakra, Container, Heading } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Text } from "@chakra-ui/react";
import { Layout } from "../components/Layout";
import { useAuth } from "../contexts/AuthContext";
import React, { ReactNode } from "react";
import {
  IconButton,
  Avatar,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from "react-icons/fi";
import { IconType } from "react-icons";
import { ReactText } from "react";


export default function Profilepage() {

   const { currentUser } = useAuth();

   return (
     <Layout>
       <Heading>Profile page</Heading>
       <Container maxW="container.lg" overflowX="auto" py={4}>
         <chakra.pre p={4}>
           {currentUser && <pre> {JSON.stringify(currentUser, null, 2)}</pre>}
         </chakra.pre>
       </Container>
     </Layout>
  );
 }
