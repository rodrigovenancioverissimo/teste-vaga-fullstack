import { RecordDTO } from '../../interface/records';
import validatePayment from './validate-payment.util';

describe('validate-payment function', () => {
  it('should return true for valid payment', () => {
    const validPayment = {
      qtPrestacoes: 12,
      vlTotal: '1200',
      vlPresta: '100',
      vlMora: '50',
      vlDescon: '0',
    } as RecordDTO;
    expect(validatePayment(validPayment)).toBe(true);
  });

  it('should return false if monthly payment does not match', () => {
    const invalidPayment = {
      qtPrestacoes: 12,
      vlTotal: '1200',
      vlPresta: '101', // Incorrect monthly payment amount
      vlMora: '50',
      vlDescon: '0',
    } as RecordDTO;
    expect(validatePayment(invalidPayment)).toBe(false);
  });

  it('should return false if overdue interest exceeds total debt after discount', () => {
    const invalidPayment = {
      qtPrestacoes: 12,
      vlTotal: '1200',
      vlPresta: '100',
      vlMora: '1001', // Overdue interest exceeds total debt after discount
      vlDescon: '200',
    } as RecordDTO;
    expect(validatePayment(invalidPayment)).toBe(false);
  });
});
