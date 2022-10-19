import { Box, Button, Flex, HStack } from "@chakra-ui/react";
import LeftSideBar from "../components/LeftSideBar";
import Navigation from "../components/Navigation";

import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function ChatPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "unauthenticated") {
    router.push("/");
    return <p>Access Denied</p>;
  }

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
        borderRightColor="gray.100"
        borderRightWidth={1}
        pt={8}
        justifyContent="center"
      >
        <LeftSideBar />
      </Flex>
      <Flex
        as="main"
        h="full"
        flex={1}
        borderRightColor="gray.100"
        borderRightWidth={1}
      >
        {/* <Chat /> */}
        <Box mt={4}>
          <Button
            fontSize="sm"
            textColor="gray.100"
            p={3}
            rounded="full"
            bg={session?.user?.accessToken ? "red.400" : "green.400"}
            onClick={() => (session?.user?.accessToken ? signOut() : signIn())}
          >
            {session?.user?.accessToken ? "Log Out" : "Log In"}
          </Button>
        </Box>
      </Flex>
      <Flex as="aside" h="full" maxW="sm" w="full">
        {/* <ChatFiles /> */}
      </Flex>
    </HStack>
  );
}
