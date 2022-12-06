import { Box, Center, chakra, Container, Heading } from "@chakra-ui/react";
import Graph from "../components/Graph/Graphics";
import { FaMoon, FaSun } from "react-icons/fa";
import { Text } from "@chakra-ui/react";
import { getDatabase } from "firebase/database";
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

const database = getDatabase();

export default function Dashboard() {
  const { currentUser } = useAuth();

  return (
    <Layout>
      <Heading>Welcome</Heading>
      <Heading>Sings Vitals</Heading>
      
    </Layout>
  );
}
