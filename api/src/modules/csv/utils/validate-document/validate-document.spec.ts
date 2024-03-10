import validateDocument from './validate-document.util';

describe('validate-document function', () => {
  it('should return true for valid CPF', () => {
    const validCPF = '445.297.910-68';
    expect(validateDocument(validCPF)).toBe(true);
  });

  it('should return false for invalid CPF', () => {
    const invalidCPF = '123.456.789-00';
    expect(validateDocument(invalidCPF)).toBe(false);
  });

  it('should return true for valid CNPJ', () => {
    const validCNPJ = '88.388.148/0001-96';
    expect(validateDocument(validCNPJ)).toBe(true);
  });

  it('should return false for invalid CNPJ', () => {
    const invalidCNPJ = '12.345.678/0001-00';
    expect(validateDocument(invalidCNPJ)).toBe(false);
  });

  it('should return false for document with invalid length', () => {
    const invalidLengthDocument = '123456789';
    expect(validateDocument(invalidLengthDocument)).toBe(false);
  });

  it('should return false for document with invalid format', () => {
    const invalidFormatDocument = 'abc123';
    expect(validateDocument(invalidFormatDocument)).toBe(false);
  });
});
