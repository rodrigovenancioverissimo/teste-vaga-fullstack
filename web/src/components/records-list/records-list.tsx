/* eslint-disable @next/next/no-async-client-component */
import { graphql } from "@/gql";
import { useQuery } from "@apollo/client";

const findRegister = graphql(/* GraphQL */ `
  query FindRegister {
    findRegister {
      cdCarteira
      cdClient
      cdProduto
      dsCarteira
      dsProduto
      dtContrato
      dtVctPre
      idSitVen
      idSituac
      isDocumentValid
      isPaymentValid
      nmClient
      nrAgencia
      nrContrato
      nrCpfCnpj
      nrInst
      nrPresta
      nrProposta
      nrSeqPre
      qtPrestacoes
      tpPresta
      vlAtual
      vlDescon
      vlIof
      vlMora
      vlMulta
      vlOutAcr
      vlPresta
      vlTotal
    }
  }
`);

export default function RecordsList() {
  const { data } = useQuery(findRegister);
  return (
    <>
      <div>
        {data?.findRegister.map((value, i) => (
          <p key={i}>{JSON.stringify(value)}</p>
        ))}
      </div>
    </>
  );
}
