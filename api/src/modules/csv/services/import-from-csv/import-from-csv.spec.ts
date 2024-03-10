import { TestBed } from '@automock/jest';
import { ImportFromCsvService } from './import-from-csv.service';
import { PrismaService } from '../../../prisma/prisma.service';
import validateDocument from '../../utils/validate-document/validate-document.util';
import validatePayment from '../../utils/validate-payment/validate-payment.util';
import formatRecord from '../../utils/format-records/format-record.util';
import * as base64 from 'base64-js';
import { Readable } from 'stream';

jest.mock('../../utils/validate-document/validate-document.util');
jest.mock('../../utils/validate-payment/validate-payment.util');
jest.mock('../../utils/format-records/format-record.util');
jest.mock('base64-js');

describe('ImportFromCsvService', () => {
  let service: ImportFromCsvService;
  let prisma: PrismaService;
  beforeAll(() => {
    const { unit, unitRef } = TestBed.create(ImportFromCsvService)
      .mock(PrismaService)
      .using({
        records: { create: jest.fn().mockReturnValue({ id: 1 }) },
      })
      .compile();
    service = unit;
    prisma = unitRef.get(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should correctly import CSV file', async () => {
    const file = 'some_base64_encoded_csv_data';
    const decodedString = `
      nrInst,nrAgencia,cdClient,nmClient,nrCpfCnpj,nrContrato,dtContrato,qtPrestacoes,vlTotal,cdProduto,dsProduto,cdCarteira,dsCarteira,nrProposta,nrPresta,tpPresta,nrSeqPre,dtVctPre,vlPresta,vlMora,vlMulta,vlOutAcr,vlIof,vlDescon,vlAtual,idSituac,idSitVen
      533,31,56133,CLIENTE 1,41854274761,733067,20221227,5,83720.19,777,CDC PESSOA JURIDICA,17,CRÉDITO DIRETO AO CONSUMIDOR,798586,2,Original,0,20220406,17524.03,29196.96,536.4,0,0,0,47257.39,Aberta,Vencida
    `;
    const formattedRecord = {
      nrCpfCnpj: '44529791068',
    };
    const validatedRecord = {
      ...formattedRecord,
      isDocumentValid: true,
      isPaymentValid: true,
    };

    (base64.toByteArray as jest.Mock).mockReturnValue(decodedString);
    (validateDocument as jest.Mock).mockReturnValue(true);
    (validatePayment as jest.Mock).mockReturnValue(true);
    (formatRecord as jest.Mock).mockReturnValue(formattedRecord);

    const readableSpy = jest.spyOn(Readable, 'from');
    await service.run(file);

    expect(readableSpy).toHaveBeenCalledWith(decodedString);
    expect(validateDocument).toHaveBeenCalledWith(formattedRecord.nrCpfCnpj);
    expect(prisma.records.create).toHaveBeenCalledWith({
      data: validatedRecord,
    });
  });
});
