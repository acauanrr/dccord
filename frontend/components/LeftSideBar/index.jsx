import { VStack, Text, Divider, Box } from "@chakra-ui/react";
import ChatHistory from "./ChatHistory";
import FriendOnline from "./FriendsOnline";
import Profile from "./Profile";

const onlineFriends = [
  { nome: "Cleuson", src: "https://github.com/cleusonss.png" },
  { nome: "Lucas", src: "https://github.com/llBessa.png" },
  { nome: "Victor", src: "https://github.com/mandaver.png" },
  { nome: "Ilem", src: "https://github.com/ilemsantos.png" },
];

export default function LeftSideBar({onChatPrivadoOpen}) {
  return (
    <VStack w="full" zIndex={10}>
      <Profile
        name="Acauan Cardoso"
        srcProfile="https://github.com/acauanrr.png"
        logOutButton={true}
      />
      <FriendOnline data={onlineFriends} onChatPrivadoOpen={onChatPrivadoOpen} />
      <Box w="full" px={8} py={4}>
        <Divider color="gray.100" />
      </Box>

      <ChatHistory data={onlineFriends} onChatPrivadoOpen={onChatPrivadoOpen} />
    </VStack>
  );
}