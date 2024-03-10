import "@/styles/globals.css";
import apolloClient from "@/apollo-client";
import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={apolloClient}>
        {/* <div className='w-screen h-screen absolute left-0 top-0 bg-slate-300 opacity-95 z-10 flex items-center justify-center'>
          <p>Carregando...</p>
        </div> */}
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}
