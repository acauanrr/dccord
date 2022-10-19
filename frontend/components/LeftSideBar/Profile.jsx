import { Avatar, AvatarBadge, Flex, Heading, HStack, IconButton, VStack } from "@chakra-ui/react";
import { RiInstagramFill, RiTwitterFill, RiGithubFill } from "react-icons/ri"

export default function Profile({ name, srcProfile }) {
  return (
    <Flex>
      <VStack>
        <Avatar name={name} src={srcProfile}>
          <AvatarBadge boxSize={4} bg="green.500" />
        </Avatar>
        <Heading as="h4" size="">
          {name}
        </Heading>
        <HStack>
        <IconButton
            color="gray.500"
            icon={<RiGithubFill/>}
            aria-label="Actions"
            variant="ghost"
            rounded="full"
          />
          <IconButton
            color="gray.500"
            icon={<RiInstagramFill/>}
            aria-label="Actions"
            variant="ghost"
            rounded="full"
          />
          <IconButton
            color="gray.500"
            rounded="full"
            icon={<RiTwitterFill/>}
            aria-label="Actions"
            variant="ghost"
          />
        </HStack>
      </VStack>
    </Flex>
  );
}
