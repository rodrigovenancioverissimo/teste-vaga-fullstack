import { csvDTO } from '../../interface/csv';
import validatePayment from '../../utils/validate-payment/validate-payment.util';
import formatRecord from '../../utils/format-records/format-record.util';
import validateDocument from '../../utils/validate-document/validate-document.util';
import * as base64 from 'base64-js';
import { Readable } from 'stream';
import * as csvParser from 'csv-parser';
import { PrismaService } from '../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ImportFromCsvService {
  constructor(private readonly prisma: PrismaService) {}

  async run(file: string): Promise<void> {
    const decodedString: string = Buffer.from(
      base64.toByteArray(file),
    ).toString('utf-8');

    const readableStream = Readable.from(decodedString);

    await new Promise((resolve, reject) => {
      readableStream
        .pipe(csvParser())
        .on('data', async (row: csvDTO) => {
          const record = formatRecord(row);
          const data = {
            ...record,

            isDocumentValid: validateDocument(record.nrCpfCnpj),
            isPaymentValid: validatePayment(record),
          };
          await this.prisma.records.create({
            data,
          });
        })
        .on('end', async () => {
          resolve(true);
          console.log('Importação finalizada com sucesso.');
        });
    });
  }
}
