import { Injectable } from '@nestjs/common';
import * as flatbuffers from 'flatbuffers';
import { CSV } from './schema';
import { RecordDTO } from '../../interface/records';
import { PrismaService } from 'src/modules/prisma/prisma.service';

@Injectable()
export default class ImportFromCsvV2Service {
  constructor(private readonly prisma: PrismaService) {}

  async run() {
    const row = {} as RecordDTO;
    const builder = new flatbuffers.Builder();
    CSV.startCSV(builder);
    CSV.addCdCarteira(builder, row.cdCarteira);
    CSV.addCdClient(builder, row.cdClient);
    CSV.addCdProduto(builder, row.cdProduto);
    // CSV.addDsCarteira(builder, row.dsCarteira);
    // CSV.addDsProduto(builder, row.dsProduto);
    // CSV.addDtContrato(builder, row.dtContrato);
    // CSV.addDtVctPre(builder, row.dtVctPre);

    // this.prisma.records.create({ data: {} });
  }
}
