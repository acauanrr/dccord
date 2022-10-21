import {
  Box,
  Flex,
  Heading,
  Input,
  List,
  ListItem,
  VStack,
} from "@chakra-ui/react";
import ChatRow from "../ChatRow";

export default function ChatHistory({ data, onChatPrivadoOpen }) {
  return (
    <VStack>
      <Heading as="h3" size="sm">
        Histórico de Conversas
      </Heading>
      <Input
        variant="filled"
        mt={2}
        minH={10}
        rounded="full"
        placeholder="Buscar conversa"
      />
      <Flex w="full" overflowY="auto">
        <List spacing={3}>
          {data.map((friend, index) => (
            <ListItem
              key={index}
              onClick={onChatPrivadoOpen}
              _hover={{ cursor: "pointer" }}
            >
              <ChatRow friend={friend} />
            </ListItem>
          ))}
        </List>
      </Flex>
    </VStack>
  );
}
