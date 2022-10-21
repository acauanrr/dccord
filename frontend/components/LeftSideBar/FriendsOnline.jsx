import {
  Avatar,
  AvatarBadge,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function FriendOnline({ data, onChatPrivadoOpen }) {
  return (
    <VStack w="full">
      <HStack px={8} w="full" justifyContent="space-between">
        <Heading size="xs">Friends Online</Heading>
        <Text fontSize="sm">23</Text>
      </HStack>
      <HStack>
        {data.map((friend, index) => (
          <Avatar
            size="sm"
            key={index}
            name={friend.nome}
            src={friend.src}
            onClick={onChatPrivadoOpen}
            _hover={{ cursor: "pointer" }}
          >
            <AvatarBadge boxSize={4} bg="green.500" />
          </Avatar>
        ))}
      </HStack>
    </VStack>
  );
}
