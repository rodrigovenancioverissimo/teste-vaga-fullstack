/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation ImportFromCsv($file: String!) {\n    importFromCsv(file: $file)\n  }\n": types.ImportFromCsvDocument,
    "\n  query FindRegister($nrCpfCnpj: String, $page: Float) {\n    findRegister(nrCpfCnpj: $nrCpfCnpj, page: $page) {\n      count\n      data {\n        id\n        cdCarteira\n        cdClient\n        cdProduto\n        dsCarteira\n        dsProduto\n        dtContrato\n        dtVctPre\n        idSitVen\n        idSituac\n        isDocumentValid\n        isPaymentValid\n        nmClient\n        nrAgencia\n        nrContrato\n        nrCpfCnpj\n        nrInst\n        nrPresta\n        nrProposta\n        nrSeqPre\n        qtPrestacoes\n        tpPresta\n        vlAtual\n        vlDescon\n        vlIof\n        vlMora\n        vlMulta\n        vlOutAcr\n        vlPresta\n        vlTotal\n      }\n    }\n  }\n": types.FindRegisterDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation ImportFromCsv($file: String!) {\n    importFromCsv(file: $file)\n  }\n"): (typeof documents)["\n  mutation ImportFromCsv($file: String!) {\n    importFromCsv(file: $file)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query FindRegister($nrCpfCnpj: String, $page: Float) {\n    findRegister(nrCpfCnpj: $nrCpfCnpj, page: $page) {\n      count\n      data {\n        id\n        cdCarteira\n        cdClient\n        cdProduto\n        dsCarteira\n        dsProduto\n        dtContrato\n        dtVctPre\n        idSitVen\n        idSituac\n        isDocumentValid\n        isPaymentValid\n        nmClient\n        nrAgencia\n        nrContrato\n        nrCpfCnpj\n        nrInst\n        nrPresta\n        nrProposta\n        nrSeqPre\n        qtPrestacoes\n        tpPresta\n        vlAtual\n        vlDescon\n        vlIof\n        vlMora\n        vlMulta\n        vlOutAcr\n        vlPresta\n        vlTotal\n      }\n    }\n  }\n"): (typeof documents)["\n  query FindRegister($nrCpfCnpj: String, $page: Float) {\n    findRegister(nrCpfCnpj: $nrCpfCnpj, page: $page) {\n      count\n      data {\n        id\n        cdCarteira\n        cdClient\n        cdProduto\n        dsCarteira\n        dsProduto\n        dtContrato\n        dtVctPre\n        idSitVen\n        idSituac\n        isDocumentValid\n        isPaymentValid\n        nmClient\n        nrAgencia\n        nrContrato\n        nrCpfCnpj\n        nrInst\n        nrPresta\n        nrProposta\n        nrSeqPre\n        qtPrestacoes\n        tpPresta\n        vlAtual\n        vlDescon\n        vlIof\n        vlMora\n        vlMulta\n        vlOutAcr\n        vlPresta\n        vlTotal\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;