import csv from 'csv-parser';
import fs from 'fs';
import { RecordDTO } from '../../interface/records';
import { csvDTO } from '../../interface/csv';
import validatePayment from '../../utils/validate-payment';
import formatRecord from '../../utils/format-record';
import validateDocument from '../../utils/validate-document';

export class ParseCsvService {
  run(path: string): Promise<RecordDTO[]> {
    return new Promise((resolve, reject) => {
      const results: RecordDTO[] = [];
      const stream = fs
        .createReadStream(path)
        .pipe(csv())
        .on('data', (data: csvDTO) => {
          const record = formatRecord(data);
          const formattedObject: RecordDTO = {
            ...record,
            isDocumentValid: validateDocument(record.nrCpfCnpj),
            isPaymentValid: validatePayment(record),
          };

          results.push(formattedObject);
        })
        .once('end', () => {
          resolve(results);
        })
        .once('error', (error) => {
          reject(error);
        });
    });
  }
}
