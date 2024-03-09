import moment from 'moment';
import { csvDTO } from '../interface/csv';
import { RecordDTO } from '../interface/records';

export default function formatRecord(data: csvDTO): RecordDTO {
  const intl = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
  });

  const currency = (str: string) => intl.format(Number(str));
  const toDate = (str: string) => moment(String(str)).toDate();
  const nrCpfCnpj = data.nrCpfCnpj.replace(/\D/g, '');

  return {
    ...data,
    vlTotal: currency(data.vlTotal),
    vlPresta: currency(data.vlPresta),
    vlMora: currency(data.vlMora),
    vlMulta: currency(data.vlMulta),
    vlOutAcr: currency(data.vlOutAcr),
    vlIof: currency(data.vlIof),
    vlDescon: currency(data.vlDescon),
    vlAtual: currency(data.vlAtual),
    dtContrato: toDate(data.dtContrato),
    dtVctPre: toDate(data.dtVctPre),
    cdCarteira: Number(data.cdCarteira),
    cdClient: Number(data.cdClient),
    cdProduto: Number(data.cdProduto),
    nrAgencia: Number(data.nrAgencia),
    nrContrato: Number(data.nrContrato),
    nrInst: Number(data.nrInst),
    nrPresta: Number(data.nrPresta),
    nrProposta: Number(data.nrProposta),
    nrSeqPre: Number(data.nrSeqPre),
    qtPrestacoes: Number(data.qtPrestacoes),
    nrCpfCnpj,
  };
}
