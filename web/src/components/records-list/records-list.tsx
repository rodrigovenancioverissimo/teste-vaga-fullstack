/* eslint-disable @next/next/no-async-client-component */
import { graphql } from "@/gql";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import TextInput from "../text-input/text-input";
import Button from "../button/button";
import usePagination from "@/store/paginaton";

const findRegister = graphql(/* GraphQL */ `
  query FindRegister($nrCpfCnpj: String, $page: Float) {
    findRegister(nrCpfCnpj: $nrCpfCnpj, page: $page) {
      count
      data {
        id
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
  }
`);

const columns = [
  "id",
  "nrInst",
  "nrAgencia",
  "cdClient",
  "nmClient",
  "nrCpfCnpj",
  "nrContrato",
  "dtContrato",
  "qtPrestacoes",
  "vlTotal",
  "cdProduto",
  "dsProduto",
  "cdCarteira",
  "dsCarteira",
  "nrProposta",
  "nrPresta",
  "tpPresta",
  "nrSeqPre",
  "dtVctPre",
  "vlMora",
  "vlMulta",
  "vlOutAcr",
  "vlIof",
  "vlAtual",
  "vlDescon",
  "vlPresta",
  "idSituac",
  "idSitVen",
  "Doc Válido",
  "Pag OK",
];

export default function RecordsList() {
  const [nrCpfCnpj, setNrCpfCnpj] = useState<string>();
  const { next, previous, page } = usePagination();
  const { data, loading } = useQuery(findRegister, {
    variables: { nrCpfCnpj, page },
  });
  const n: number = data?.findRegister.count || 0;

  return (
    <>
      <div>
        <div className='flex flex-row gap-4 items-start bg-slate-200 px-4 pb-2'>
          <TextInput
            onChange={(e) => {
              setNrCpfCnpj(e.target.value);
            }}
            label='NRCPFCNPJ'
          />
        </div>
        <div className='relative overflow-x-auto shadow-md'>
          {loading ? (
            <div className='flex items-center justify-center'>Carregando</div>
          ) : (
            <table className='w-full text-sm text-gray-500 ml-4'>
              <thead className='text-xs text-gray-700 uppercase bg-gray-50'>
                <tr className='whitespace-nowrap mb-2 text-left'>
                  {columns.map((column, index) => (
                    <th scope='col' className='pr-4' key={index}>
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data?.findRegister.data.map((item, i) => (
                  <tr
                    className='bg-white border-b hover:bg-gray-50 whitespace-nowrap'
                    key={i}
                  >
                    <td className='pr-2'>{item.id}</td>
                    <td className='pr-2'>{item.nrInst}</td>
                    <td className='pr-2'>{item.nrAgencia}</td>
                    <td className='pr-2'>{item.cdClient}</td>
                    <td className='pr-2'>{item.nmClient}</td>
                    <td className='pr-2'>{item.nrCpfCnpj ?? "N/A"}</td>
                    <td className='pr-2'>{item.nrContrato}</td>
                    <td className='pr-2'>
                      {new Date(item.dtContrato).toLocaleDateString()}
                    </td>
                    <td className='pr-2'>{item.qtPrestacoes}</td>
                    <td className='pr-2'>{item.vlTotal}</td>
                    <td className='pr-2'>{item.cdProduto}</td>
                    <td className='pr-2'>{item.dsProduto}</td>
                    <td className='pr-2'>{item.cdCarteira}</td>
                    <td className='pr-2'>{item.dsCarteira}</td>
                    <td className='pr-2'>{item.nrProposta}</td>
                    <td className='pr-2'>{item.nrPresta}</td>
                    <td className='pr-2'>{item.tpPresta}</td>
                    <td className='pr-2'>{item.nrSeqPre}</td>
                    <td className='pr-2'>
                      {new Date(item.dtVctPre).toLocaleDateString()}
                    </td>
                    <td className='pr-2'>{item.vlMora}</td>
                    <td className='pr-2'>{item.vlMulta}</td>
                    <td className='pr-2'>{item.vlOutAcr}</td>
                    <td className='pr-2'>{item.vlIof}</td>
                    <td className='pr-2'>{item.vlAtual}</td>
                    <td className='pr-2'>{item.vlDescon}</td>
                    <td className='pr-2'>{item.vlPresta}</td>
                    <td className='pr-2'>{item.idSituac}</td>
                    <td className='pr-2'>{item.idSitVen}</td>
                    <td className='pr-2'>
                      {item.isDocumentValid ? "Sim" : "Não"}
                    </td>
                    <td className='pr-2'>
                      {item.isPaymentValid ? "Sim" : "Não"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <div className='flex flex-row gap-4 w-full items-center'>
          <ul className='inline-flex text-sm h-8'>
            <li>
              <Button onClick={previous} className='rounded-r-none'>
                Anterior
              </Button>
            </li>

            <li>
              <Button onClick={next} className='rounded-l-none'>
                Próxima
              </Button>
            </li>
          </ul>
          <div>
            Página {page} de {Math.ceil(n / 20)} - {n} resultados
          </div>
        </div>
      </div>
    </>
  );
}
