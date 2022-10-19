import {
  Avatar,
  AvatarBadge,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function ChatRow({ friend }) {
  return (
    <HStack>
      <Avatar size="sm" name={friend.nome} src={friend.src}/>
      <VStack>
        <Heading size="xs">{friend.nome}</Heading>
        <Text>Ultima conversa...</Text>
      </VStack>
      <Text>8:30h</Text>
    </HStack>
  );
}
