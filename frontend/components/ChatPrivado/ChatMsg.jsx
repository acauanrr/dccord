import { VStack, Box, Text, Heading } from "@chakra-ui/react";

export default function ChatMsg({ person, message, dateSent, from }) {
  const isMe = from === "me";
  const alignment = isMe ? "flex-end" : "flex-start";
  const bottomRightRadius = isMe ? 0 : 10;
  const bottomLeftRadius = isMe ? 10 : 0;

  return (
    <VStack mt={6} alignItems={alignment} alignSelf={alignment}>
      <Heading as="h3" size="sm">
        {from}
      </Heading>
      <Box
        bg={isMe ? "blue.50" : "gray.100"}
        px={6}
        py={1.5}
        maxW="full"
        rounded="sm"
      >
        {message}
      </Box>
      <Text fontSize="xs" color="gray">
        {dateSent}
      </Text>
    </VStack>
  );
}
