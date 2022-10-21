import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession, signIn, signOut, getSession } from "next-auth/react";

import { Box, Button, Flex, HStack, useDisclosure } from "@chakra-ui/react";
import LeftSideBar from "../components/LeftSideBar";
import Navigation from "../components/Navigation";
import Chat from "../components/Chat";
import ChatPrivado from "../components/ChatPrivado";
import ChatPrivadoDrawer from "../components/ChatPrivado/ChatPrivadoDrawer";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import useSWR from "swr";
import fetch from "unfetch";

const fetcher = (url) => fetch(url).then((r) => r.json());

const API_URI =
  process.env.NODE_ENV === "production"
    ? process.env.API_URI_CLOUD
    : process.env.API_URI_LOCAL;

export default function ChatPage() {
  const router = useRouter();
  const { data: session } = useSession();
  const [emailUser, setEmailUser] = useState(session.user.email);
  const [userData, setUserData] = useState("");

  // Fetch Data
  const { data, error } = useSWR(
    `${API_URI}/user/${emailUser}`,
    fetcher
  );
  console.log(data);

  const {
    isOpen: isChatPrivadoOpen,
    onOpen: onChatPrivadoOpen,
    onClose: onChatPrivadoClose,
  } = useDisclosure();

  return (
    <HStack h="100vh" spacing={0}>
      <Flex as="nav" h="full" maxW={16} w="full" bg="gray.100">
        <Navigation />
      </Flex>
      <Flex
        as="aside"
        h="full"
        maxW="sm"
        w="full"
        bg="white"
        borderRightColor="gray.100"
        borderRightWidth={1}
        pt={8}
        justifyContent="center"
      >
        <LeftSideBar onChatPrivadoOpen={onChatPrivadoOpen} />
      </Flex>

      <Flex
        as="main"
        h="full"
        flex={1}
        borderRightColor="gray.100"
        borderRightWidth={1}
      >
        <Chat onChatPrivadoOpen={onChatPrivadoOpen} />
      </Flex>

      <ChatPrivadoDrawer
        isOpen={isChatPrivadoOpen}
        onClose={onChatPrivadoClose}
      />
    </HStack>
  );
}

ChatPage.auth = {
  role: "admin",
  loading: <Skeleton />,
  unauthorized: "/", // redirect to this url
};
