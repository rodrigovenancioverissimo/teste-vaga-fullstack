import { RecordDTO } from '../../interface/records';
import { csvDTO } from '../../interface/csv';
import validatePayment from '../../utils/validate-payment';
import formatRecord from '../../utils/format-record';
import validateDocument from '../../utils/validate-document';
import * as base64 from 'base64-js';
import { Readable } from 'stream';
import csvParser from 'csv-parser';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ImportFromCsvService {
  constructor(private readonly prisma: PrismaService) {}

  async run(file: string): Promise<void> {
    const decodedString: string = Buffer.from(
      base64.toByteArray(file),
    ).toString('utf-8');

    const readableStream = Readable.from(decodedString);

    await new Promise((resolve) => {
      readableStream
        .pipe(csvParser())
        .on('data', async (row: csvDTO) => {
          const record = formatRecord(row);

          await this.prisma.records.create({
            data: {
              ...record,

              isDocumentValid: validateDocument(record.nrCpfCnpj),
              isPaymentValid: validatePayment(record),
            },
          });
        })
        .on('end', async () => {
          resolve(true);
          console.log('Importação finalizada com sucesso.');
        });
    });
  }
}
