import * as moment from 'moment';
import formatRecord from './format-record.util';
import { csvDTO } from '../../interface/csv';

describe('format-record function', () => {
  const csvData: csvDTO = {
    dsCarteira: '-',
    dsProduto: '-',
    nmClient: '-',
    tpPresta: '-',
    idSituac: '-',
    idSitVen: '-',

    nrCpfCnpj: '12345678900',
    vlTotal: '1000',
    vlPresta: '90',
    vlMora: '0',
    vlMulta: '0',
    vlOutAcr: '0',
    vlIof: '10',
    vlDescon: '100',
    vlAtual: '900',
    dtContrato: '2024-01-10',
    dtVctPre: '2024-04-10',
    cdCarteira: '123',
    cdClient: '123',
    cdProduto: '123',
    nrAgencia: '123',
    nrContrato: '123',
    nrInst: '123',
    nrPresta: '1',
    nrProposta: '123',
    nrSeqPre: '2',
    qtPrestacoes: '10',
  };

  const expectedRecord = {
    ...csvData,
    nrCpfCnpj: '12345678900',
    vlTotal: 'R$ 1.000,00',
    vlPresta: 'R$ 90,00',
    vlMora: 'R$ 0,00',
    vlMulta: 'R$ 0,00',
    vlOutAcr: 'R$ 0,00',
    vlIof: 'R$ 10,00',
    vlDescon: 'R$ 100,00',
    vlAtual: 'R$ 900,00',
    dtContrato: moment('20240110').toDate(),
    dtVctPre: moment('20240410').toDate(),
    cdCarteira: 123,
    cdClient: 123,
    cdProduto: 123,
    nrAgencia: 123,
    nrContrato: 123,
    nrInst: 123,
    nrPresta: 1,
    nrProposta: 123,
    nrSeqPre: 2,
    qtPrestacoes: 10,
  };

  it('should format record data correctly', () => {
    const formattedRecord = formatRecord(csvData);
    expect(formattedRecord).toMatchObject(expectedRecord);
  });
});
