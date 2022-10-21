import {
  Avatar,
  AvatarBadge,
  Flex,
  Heading,
  HStack,
  IconButton,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { RiInstagramFill, RiTwitterFill, RiGithubFill } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { useRouter } from "next/router";
import { useSession, signIn, signOut, getSession } from "next-auth/react";

export default function Profile({ name, srcProfile, logOutButton }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  return (
    <Flex>
      <VStack>
        <Avatar name={name} src={srcProfile}>
          <AvatarBadge boxSize={4} bg="green.500" />
        </Avatar>
        <HStack>
          <Heading as="h4" size="md">
            {name}
          </Heading>
          {logOutButton && (
            <Tooltip label="Sair" placement="right">
              <IconButton
                as="button"
                color="gray.500"
                icon={<MdLogout />}
                variant="ghost"
                aria-label="Sair"
                onClick={() =>
                  session?.user?.accessToken ? signOut() : signIn()
                }
              />
            </Tooltip>
          )}
        </HStack>
        <HStack>
          <IconButton
            color="gray.500"
            icon={<RiGithubFill />}
            aria-label="Actions"
            variant="ghost"
            rounded="full"
          />
          <IconButton
            color="gray.500"
            icon={<RiInstagramFill />}
            aria-label="Actions"
            variant="ghost"
            rounded="full"
          />
          <IconButton
            color="gray.500"
            rounded="full"
            icon={<RiTwitterFill />}
            aria-label="Actions"
            variant="ghost"
          />
        </HStack>
      </VStack>
    </Flex>
  );
}
