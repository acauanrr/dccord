import { Box, Heading, Input, List, ListItem, VStack } from "@chakra-ui/react";
import ChatRow from "../ChatRow";

export default function ChatHistory({ data }) {
  return (
    <VStack>
      <Heading>Chat History</Heading>
      <Input
        variant="filled"
        mt={2}
        minH={10}
        rounded="full"
        placeholder="Search chat"
      />
      <Box w="full" overflowY="auto">
        <List spacing={0}>
          <ListItem>
            {data.map((friend, index) => (
              <ChatRow key={index} friend={friend} />
            ))}
          </ListItem>
        </List>
      </Box>
    </VStack>
  );
}
