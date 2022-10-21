import React, { useState } from "react";
import { Box, Flex, Icon, chakra } from "@chakra-ui/react";

import { TbMoodSmile, TbFaceIdError } from "react-icons/tb";

export default function Alerts({ type, msg }) {
  return (
    <Flex
      w="full"
      bg="#edf3f8"
      alignItems="center"
      justifyContent="center"
      mb={3}
    >
      <Flex
        w="full"
        mx="auto"
        bg="white"
        shadow="md"
        rounded="lg"
        overflow="hidden"
      >
        <Flex
          justifyContent="center"
          alignItems="center"
          px={1}
          bg={type === "ok" ? "green.500" : "red.500"}
        >
          <Icon
            as={type === "ok" ? TbMoodSmile : TbFaceIdError}
            color="white"
            boxSize={5}
          />
        </Flex>

        <Box mx={-3} py={0} px={1}>
          <Box mx={3}>
            <chakra.span
              fontSize="xs"
              color={type === "ok" ? "green.500" : "red.500"}
              fontWeight="bold"
            >
              {type}
            </chakra.span>
            <chakra.p
              fontSize="2xs"
              color="gray.600"
              _dark={{ color: "gray.200" }}
            >
              {msg}
            </chakra.p>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}
