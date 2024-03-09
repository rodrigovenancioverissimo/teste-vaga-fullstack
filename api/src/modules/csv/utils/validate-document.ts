import { cnpj, cpf } from 'cpf-cnpj-validator';

export default function validateDocument(doc: string) {
  if (doc.length === 11) return cpf.isValid(doc);
  if (doc.length === 14) return cnpj.isValid(doc);

  return false;
}
