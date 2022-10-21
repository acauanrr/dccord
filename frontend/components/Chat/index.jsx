import {
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  Stat,
  StatLabel,
  StatNumber,
  VStack,
} from "@chakra-ui/react";
import { IoSend, IoDocuments } from "react-icons/io5";
import { HiChat } from "react-icons/hi";

import ChatBubble from "./ChatBubble.jsx";

const messages = [
  {
    message: "Eae galera tudo bem?",
    from: "cleusonss",
    dateSent: "20:21",
    avatar: "https://github.com/cleusonss.png",
  },
  {
    message: "Será quem vai ser nosso presidente??",
    from: "me",
    dateSent: "20:22",
    avatar: "https://github.com/acauanrr.png",
  },
  {
    message: "Eu tenho tenho muita coisa para estudar este semestre?",
    from: "llBessa",
    dateSent: "20:22",
    avatar: "https://github.com/llBessa.png",
  },
  {
    message:
      "Embora ninguém possa voltar atrás e fazer um novo começo, qualquer um pode começar agora e fazer um novo fim.",
    from: "me",
    dateSent: "20:23",
    avatar: "https://github.com/acauanrr.png",
  },
  {
    message: "Como são admiráveis as pessoas que nós não conhecemos bem.",
    from: "cleusonss",
    dateSent: "20:23",
    avatar: "https://github.com/cleusonss.png",
  },
  {
    message:
      "As pessoas que falam muito, mentem sempre, porque acabam esgotando seu estoque de verdades.",
    from: "me",
    dateSent: "20:24",
    avatar: "https://github.com/acauanrr.png",
  },
  {
    message:
      "A verdadeira amizade é aquela que nos permite falar, ao amigo, de todos os seus defeitos e de todas as nossas qualidades.",
    from: "llBessa",
    dateSent: "20:24",
    avatar: "https://github.com/llBessa.png",
  },
  {
    message:
      "O cadáver é que é o produto final. Nós somos apenas a matéria prima",
    from: "me",
    dateSent: "20:24",
    avatar: "https://github.com/acauanrr.png",
  },
  {
    message: "O cara só é sinceramente ateu quando está muito bem de saúde",
    from: "cleusonss",
    dateSent: "20:25",
    avatar: "https://github.com/cleusonss.png",
  },
  {
    message:
      "Há duas coisas que ninguém perdoa: nossas vitórias e nossos fracassos",
    from: "me",
    dateSent: "20:25",
    avatar: "https://github.com/acauanrr.png",
  },
];

export default function Chat({ onChatPrivadoOpen }) {
  return (
    <Flex w="full" flexDirection="column">
      <HStack
        w="full"
        px={4}
        py={4}
        borderBottomColor="gray.100"
        borderBottomWidth={1}
        bg="primary"
      >
        <VStack maxW={60} w="full" spacing={0}>
          {/* <Heading as="h3" size="sm" color="tertiary">
            DCCord
          </Heading> */}
          <Flex w="full" justifyContent="center">
            <Image src="/images/logo-full-2.png" alt="logo" boxSize="40%" />
          </Flex>
          <Heading as="h2" size="md" color="white">
            Canal #roraima
          </Heading>
        </VStack>
        <HStack flex={1} w="full">
          <Input
            variant="filled"
            rounded="full"
            placeholder="Procurar palavra"
            color="white"
          />
        </HStack>
      </HStack>

      <Flex px={6} overflowY="auto" flexDirection="column" flex={1}>
        {messages.map(({ message, from, dateSent, avatar}, index) => (
          <ChatBubble
            key={index}
            message={message}
            from={from}
            dateSent={dateSent}
            onChatPrivadoOpen={onChatPrivadoOpen} 
            avatar={avatar}
          />
        ))}
      </Flex>
      <Flex
        pl={4}
        pr={2}
        py={8}
        borderTopColor="brand.500"
        borderTopWidth={1}
        bg="gray.100"
        color="gray.700"
      >
        <Input
          variant="unstyled"
          placeholder="Digite sua mensagem"
          rounded="full"
          borderColor="brand.500"
          borderWidth={1}
          px={4}
        />
        <IconButton
          colorScheme="cyan"
          aria-label="Send message"
          variant="ghost"
          icon={<IoSend />}
        />
      </Flex>
    </Flex>
  );
}
