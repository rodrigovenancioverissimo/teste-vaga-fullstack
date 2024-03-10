import { TestBed } from '@automock/jest';
import { PrismaService } from '../../../prisma/prisma.service';
import { FindRecordsService } from './find-records.service';

describe('FindRecordsService', () => {
  let service: FindRecordsService;
  let prisma: PrismaService;
  beforeAll(() => {
    const { unit, unitRef } = TestBed.create(FindRecordsService)
      .mock(PrismaService)
      .using({
        records: { findMany: jest.fn().mockReturnValue([{ id: 1 }]) },
      })
      .compile();
    service = unit;
    prisma = unitRef.get(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('without args', async () => {
    await service.run();

    expect(prisma.records.findMany).toHaveBeenCalled();
  });

  test('with args', async () => {
    await service.run({
      nmClient: '-',
      nrCpfCnpj: '-',
      orderBy: 'id',
      page: 1,
    });

    expect(prisma.records.findMany).toHaveBeenCalled();
  });
});
