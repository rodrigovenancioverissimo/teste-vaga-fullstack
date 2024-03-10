import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Record {
  @Field()
  nrInst: number;

  @Field()
  nrAgencia: number;

  @Field()
  cdClient: number;

  @Field()
  nmClient: string;

  @Field()
  nrCpfCnpj: string | null;

  @Field()
  nrContrato: number;

  @Field()
  dtContrato: Date;

  @Field()
  qtPrestacoes: number;

  @Field()
  vlTotal: string;

  @Field()
  cdProduto: number;

  @Field()
  dsProduto: string;

  @Field()
  cdCarteira: number;

  @Field()
  dsCarteira: string;

  @Field()
  nrProposta: number;

  @Field()
  nrPresta: number;

  @Field()
  tpPresta: string;

  @Field()
  nrSeqPre: number;

  @Field()
  dtVctPre: Date;

  @Field()
  vlPresta: string;

  @Field()
  vlMora: string;

  @Field()
  vlMulta: string;

  @Field()
  vlOutAcr: string;

  @Field()
  vlIof: string;

  @Field()
  vlDescon: string;

  @Field()
  vlAtual: string;

  @Field()
  idSituac: string;

  @Field()
  idSitVen: string;

  @Field()
  isDocumentValid?: boolean;

  @Field()
  isPaymentValid?: boolean;
}
