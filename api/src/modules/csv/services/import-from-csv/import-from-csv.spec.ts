import { ImportFromCsvService } from './import-from-csv.service';
import { PrismaService } from '../../../prisma/prisma.service';
import validateDocument from '../../utils/validate-document/validate-document.util';
import validatePayment from '../../utils/validate-payment/validate-payment.util';
import formatRecord from '../../utils/format-records/format-record.util';
import * as base64 from 'base64-js';
import { Readable } from 'stream';
import * as csvParser from 'csv-parser';

jest.mock('../../../prisma/prisma.service');
jest.mock('../../utils/validate-document/validate-document.util');
jest.mock('../../utils/validate-payment/validate-payment.util');
jest.mock('../../utils/format-records/format-record.util');
jest.mock('base64-js');
jest.mock('csv-parser');

describe('ImportFromCsvService', () => {
  let importService: ImportFromCsvService;
  let prismaService: PrismaService;

  beforeEach(() => {
    prismaService = new PrismaService();
    importService = new ImportFromCsvService(prismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should correctly import CSV file', async () => {
    const file = 'some_base64_encoded_csv_data';
    const decodedString = 'decoded_csv_data';
    const csvRow = {
      nrCpfCnpj: '445.297.910-68',
    };
    const formattedRecord = {
      nrCpfCnpj: '44529791068',
    };
    const validatedRecord = {
      ...formattedRecord,
      isDocumentValid: true,
      isPaymentValid: true,
    };

    // Mock implementations
    (base64.toByteArray as jest.Mock).mockReturnValue(decodedString);
    (Readable.from as jest.Mock).mockReturnValue({
      pipe: jest.fn().mockReturnValue({
        on: jest.fn().mockReturnValue({
          on: jest.fn().mockResolvedValue(true),
        }),
      }),
    });
    (csvParser as jest.Mock).mockReturnValueOnce({ on: jest.fn() });

    // Stubbing implementations
    (validateDocument as jest.Mock).mockReturnValue(true);
    (validatePayment as jest.Mock).mockReturnValue(true);
    (formatRecord as jest.Mock).mockReturnValue(formattedRecord);

    await importService.run(file);

    expect(base64.toByteArray).toHaveBeenCalledWith(file);
    expect(Readable.from).toHaveBeenCalledWith(decodedString);
    expect(csvParser).toHaveBeenCalled();
    expect(formatRecord).toHaveBeenCalledWith(csvRow);
    expect(validateDocument).toHaveBeenCalledWith(formattedRecord.nrCpfCnpj);
    expect(validatePayment).toHaveBeenCalledWith(formattedRecord);
    expect(prismaService.records.create).toHaveBeenCalledWith({
      data: validatedRecord,
    });
  });
});
