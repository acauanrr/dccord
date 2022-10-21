import { Flex, Heading, IconButton, Input, VStack } from "@chakra-ui/react";
import { IoSend } from "react-icons/io5";
import Profile from "../LeftSideBar/Profile";
import ChatMsg from "./ChatMsg";

export default function ChatPrivado() {
  const messages = [
    {
      message: "Oi Acauan tudo bem?",
      from: "Cleuson",
      dateSent: "20:21",
    },
    {
      message: "Tudo sim e com vc?",
      from: "Cleuson",
      dateSent: "20:22",
    },
    {
      message: "Tranquilo, sabe o que é...",
      from: "me",
      dateSent: "20:22",
    },
  ];

  return (
    <VStack w="full">
      <Heading
        as="h2"
        size="md"
        color="secondary"
        alignSelf="flex-start"
        px={8}
        pb={4}
      >
        Conversa privada com:
      </Heading>
      <Profile
        name="Cleuson Santos"
        srcProfile="https://github.com/cleusonss.png"
      />
      <Flex px={0} overflowY="auto" flexDirection="column" w="90%">
        {messages.map(({ message, from, dateSent }, index) => (
          <ChatMsg
            key={index}
            message={message}
            from={from}
            dateSent={dateSent}
          />
        ))}
      </Flex>
      <Flex w="90%" borderColor="gray.200" borderWidth={1}>
        <Input variant="unstyled" placeholder="Digite sua mensagem" pl={2} />
        <IconButton
          colorScheme="blue"
          aria-label="Send message"
          variant="ghost"
          icon={<IoSend />}
        />
      </Flex>
    </VStack>
  );
}
