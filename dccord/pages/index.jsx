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
} from "@chakra-ui/react";

import { useState } from "react";
import { signIn, getCsrfToken } from "next-auth/react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useRouter } from "next/router";

export default function Login({ csrfToken }) {
  const router = useRouter();
  const [error, setError] = useState(null);

  return (
    <Flex
      bg="gray.100"
      align="center"
      justify="center"
      h="100vh"
      flexDirection="column"
    >
      <Box w={60} pb={5}>
        <Image src="/images/logo-full.png" alt="logo" />
      </Box>

      <Box bg="white" p={6} rounded="md" w={64}>
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
              callbackUrl: `${window.location.origin}`,
            });
            if (res?.error) {
              setError(res.error);
            } else {
              setError(null);
            }
            if (res.url) router.push("/chatpage");
            setSubmitting(false);
          }}
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                {error && <FormErrorMessage>{error}</FormErrorMessage>}
                <FormControl>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
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
                <Field
                  as={Checkbox}
                  id="rememberMe"
                  name="rememberMe"
                  colorScheme="blue"
                >
                  <Text fontSize="xs">Remember me?</Text>
                </Field>
                <Button type="submit" colorScheme="blue" width="full">
                  Login
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
