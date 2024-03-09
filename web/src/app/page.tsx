import { graphql } from "@/gql";
import apolloClient from "./apollo-client";

const findRegister = graphql(/* GraphQL */ `
  query findRegister {
    findRegister
  }
`);

export default async function Home() {
  const { data } = await apolloClient.query({ query: findRegister });
  return <div>{data?.findRegister[0]}</div>;
}
