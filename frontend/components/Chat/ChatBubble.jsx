import { VStack, Box, Text, Avatar, HStack } from "@chakra-ui/react";

export default function ChatBubble({
  message,
  from,
  dateSent,
  onChatPrivadoOpen,
  avatar
}) {
  const isMe = from === "me";
  const alignment = isMe ? "flex-end" : "flex-start";
  const bottomRightRadius = isMe ? 0 : 32;
  const bottomLeftRadius = isMe ? 32 : 0;

  return (
    <VStack mt={6} alignItems={alignment} alignSelf={alignment}>
      <Avatar
        size="sm"
        name={from}
        src={avatar}
        onClick={onChatPrivadoOpen}
        _hover={{ cursor: "pointer" }}
      />
      <Box
        bg={isMe ? "blue.50" : "gray.100"}
        px={6}
        py={4}
        maxW={96}
        borderTopLeftRadius={32}
        borderTopRightRadius={32}
        borderBottomLeftRadius={bottomLeftRadius}
        borderBottomRightRadius={bottomRightRadius}
      >
        {message}
      </Box>
    </VStack>
  );
}
