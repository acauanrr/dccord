import { Center, ChakraProvider, extendTheme } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";
import NextNProgress from "nextjs-progressbar";

import "@fontsource/noto-sans/400.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto-condensed/700.css";
import theme from "../styles/theme";

function Auth({ children }) {
  const { status } = useSession({ required: true });

  if (status === "loading") {
    return (
      <Center h="full">
        <NextNProgress options={{ easing: "ease", speed: 500 }} />
      </Center>
    );
  }

  return children;
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      {Component.auth ? (
        <Auth>
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </Auth>
      ) : (
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      )}
    </SessionProvider>
  );
}
