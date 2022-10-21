import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
  Checkbox,
  Image,
  HStack,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";

import { useEffect, useState } from "react";
import { signIn, getCsrfToken } from "next-auth/react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useRouter } from "next/router";
import Alerts from "../components/_ui/Alerts";

export default function Login() {
  const router = useRouter();
  const [type, setType] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    setType(router.query.type);
    setMsg(router.query.msg);
  }, []);

  return (
    <Flex
      align="center"
      justify="center"
      h="100vh"
      flexDirection="column"
    >
      <Box w={60} pb={5}>
        <Image src="/images/logo-full.png" alt="logo" />
      </Box>

      <Box bg="white" p={6} rounded="md" w={300}>
        <Formik
          initialValues={{
            email: "",
            password: "",
            rememberMe: false,
          }}
          onSubmit={async (values, { setSubmitting }) => {
            const res = await signIn("credentials", {
              redirect: false,
              email: values.email,
              password: values.password,
              // callbackUrl: `${window.location.origin}`,
            });
            if (res?.error) {
              setType("error");
              setMsg("E-mail ou Senha inválidos");
            } else {
              setType(null);
              setMsg(null);
            }
            if (res.url) router.push("/chatpage");
            setSubmitting(false);
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              {msg && <Alerts type={type} msg={msg} />}
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="email">E-mail</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    validate={(value) => {
                      let error;

                      if (value.length < 5) {
                        error = "Password deve conter no mínimo 6 caracteres";
                      }

                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <Button
                  type="submit"
                  width="full"
                  color="white"
                  bg="brand.600"
                  _hover={{ bg: "brand.700" }}
                >
                  Entrar
                </Button>
                <HStack
                  w="full"
                  justifyContent="space-between"
                  fontSize="sm"
                  fontWeight="bold"
                  color="cyan.400"
                >
                  <Box>
                    <NextLink href="#" passHref>
                      <Link
                        textDecorationLine="none"
                        _hover={{ color: "cyan.700" }}
                      >
                        Esqueceu a senha
                      </Link>
                    </NextLink>
                  </Box>
                  <Box>
                    <NextLink href="/cadastro" passHref>
                      <Link
                        textDecorationLine="none"
                        _hover={{ color: "cyan.700" }}
                      >
                        Cadastrar
                      </Link>
                    </NextLink>
                  </Box>
                </HStack>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
}
