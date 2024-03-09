import { RecordDTO } from '../interface/records';

export default function validatePayment(payment: RecordDTO): boolean {
  const toInt = (str: string) => parseInt(str.replace(/[^\d,]/g, ''));

  const { qtPrestacoes } = payment;
  const vlTotal = toInt(payment.vlTotal);
  const monthlyPayment = Math.trunc(vlTotal / qtPrestacoes);
  const vlPresta = toInt(payment.vlPresta);

  if (monthlyPayment !== vlPresta) return false;

  const vlMora = toInt(payment.vlMora);
  const vlDescon = toInt(payment.vlDescon);

  if (vlMora > vlTotal - vlDescon) return false;

  return true;
}
