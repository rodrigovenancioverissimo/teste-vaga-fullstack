/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type FindRecordsObject = {
  __typename?: 'FindRecordsObject';
  count: Scalars['Float']['output'];
  data: Array<Record>;
};

export type Mutation = {
  __typename?: 'Mutation';
  importFromCsv: Scalars['String']['output'];
};


export type MutationImportFromCsvArgs = {
  file: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  findRegister: FindRecordsObject;
};


export type QueryFindRegisterArgs = {
  nrCpfCnpj?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
};

export type Record = {
  __typename?: 'Record';
  cdCarteira: Scalars['Float']['output'];
  cdClient: Scalars['Float']['output'];
  cdProduto: Scalars['Float']['output'];
  dsCarteira: Scalars['String']['output'];
  dsProduto: Scalars['String']['output'];
  dtContrato: Scalars['DateTime']['output'];
  dtVctPre: Scalars['DateTime']['output'];
  id: Scalars['Float']['output'];
  idSitVen: Scalars['String']['output'];
  idSituac: Scalars['String']['output'];
  isDocumentValid: Scalars['Boolean']['output'];
  isPaymentValid: Scalars['Boolean']['output'];
  nmClient: Scalars['String']['output'];
  nrAgencia: Scalars['Float']['output'];
  nrContrato: Scalars['Float']['output'];
  nrCpfCnpj: Scalars['String']['output'];
  nrInst: Scalars['Float']['output'];
  nrPresta: Scalars['Float']['output'];
  nrProposta: Scalars['Float']['output'];
  nrSeqPre: Scalars['Float']['output'];
  qtPrestacoes: Scalars['Float']['output'];
  tpPresta: Scalars['String']['output'];
  vlAtual: Scalars['String']['output'];
  vlDescon: Scalars['String']['output'];
  vlIof: Scalars['String']['output'];
  vlMora: Scalars['String']['output'];
  vlMulta: Scalars['String']['output'];
  vlOutAcr: Scalars['String']['output'];
  vlPresta: Scalars['String']['output'];
  vlTotal: Scalars['String']['output'];
};

export type ImportFromCsvMutationVariables = Exact<{
  file: Scalars['String']['input'];
}>;


export type ImportFromCsvMutation = { __typename?: 'Mutation', importFromCsv: string };

export type FindRegisterQueryVariables = Exact<{
  nrCpfCnpj?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
}>;


export type FindRegisterQuery = { __typename?: 'Query', findRegister: { __typename?: 'FindRecordsObject', count: number, data: Array<{ __typename?: 'Record', id: number, cdCarteira: number, cdClient: number, cdProduto: number, dsCarteira: string, dsProduto: string, dtContrato: any, dtVctPre: any, idSitVen: string, idSituac: string, isDocumentValid: boolean, isPaymentValid: boolean, nmClient: string, nrAgencia: number, nrContrato: number, nrCpfCnpj: string, nrInst: number, nrPresta: number, nrProposta: number, nrSeqPre: number, qtPrestacoes: number, tpPresta: string, vlAtual: string, vlDescon: string, vlIof: string, vlMora: string, vlMulta: string, vlOutAcr: string, vlPresta: string, vlTotal: string }> } };


export const ImportFromCsvDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ImportFromCsv"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"file"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"importFromCsv"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"file"},"value":{"kind":"Variable","name":{"kind":"Name","value":"file"}}}]}]}}]} as unknown as DocumentNode<ImportFromCsvMutation, ImportFromCsvMutationVariables>;
export const FindRegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FindRegister"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"nrCpfCnpj"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"findRegister"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"nrCpfCnpj"},"value":{"kind":"Variable","name":{"kind":"Name","value":"nrCpfCnpj"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"cdCarteira"}},{"kind":"Field","name":{"kind":"Name","value":"cdClient"}},{"kind":"Field","name":{"kind":"Name","value":"cdProduto"}},{"kind":"Field","name":{"kind":"Name","value":"dsCarteira"}},{"kind":"Field","name":{"kind":"Name","value":"dsProduto"}},{"kind":"Field","name":{"kind":"Name","value":"dtContrato"}},{"kind":"Field","name":{"kind":"Name","value":"dtVctPre"}},{"kind":"Field","name":{"kind":"Name","value":"idSitVen"}},{"kind":"Field","name":{"kind":"Name","value":"idSituac"}},{"kind":"Field","name":{"kind":"Name","value":"isDocumentValid"}},{"kind":"Field","name":{"kind":"Name","value":"isPaymentValid"}},{"kind":"Field","name":{"kind":"Name","value":"nmClient"}},{"kind":"Field","name":{"kind":"Name","value":"nrAgencia"}},{"kind":"Field","name":{"kind":"Name","value":"nrContrato"}},{"kind":"Field","name":{"kind":"Name","value":"nrCpfCnpj"}},{"kind":"Field","name":{"kind":"Name","value":"nrInst"}},{"kind":"Field","name":{"kind":"Name","value":"nrPresta"}},{"kind":"Field","name":{"kind":"Name","value":"nrProposta"}},{"kind":"Field","name":{"kind":"Name","value":"nrSeqPre"}},{"kind":"Field","name":{"kind":"Name","value":"qtPrestacoes"}},{"kind":"Field","name":{"kind":"Name","value":"tpPresta"}},{"kind":"Field","name":{"kind":"Name","value":"vlAtual"}},{"kind":"Field","name":{"kind":"Name","value":"vlDescon"}},{"kind":"Field","name":{"kind":"Name","value":"vlIof"}},{"kind":"Field","name":{"kind":"Name","value":"vlMora"}},{"kind":"Field","name":{"kind":"Name","value":"vlMulta"}},{"kind":"Field","name":{"kind":"Name","value":"vlOutAcr"}},{"kind":"Field","name":{"kind":"Name","value":"vlPresta"}},{"kind":"Field","name":{"kind":"Name","value":"vlTotal"}}]}}]}}]}}]} as unknown as DocumentNode<FindRegisterQuery, FindRegisterQueryVariables>;