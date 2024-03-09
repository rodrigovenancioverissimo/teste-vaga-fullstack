/* eslint-disable @next/next/no-async-client-component */
import { graphql } from "@/gql";
import { useQuery } from "@apollo/client";

const findRegister = graphql(/* GraphQL */ `
  query findRegister {
    findRegister
  }
`);

export default function RecordsList() {
  const { data } = useQuery(findRegister);
  return (
    <>
      <div>
        {data?.findRegister.map((value, i) => (
          <p key={i}>{value}</p>
        ))}
      </div>
    </>
  );
}
