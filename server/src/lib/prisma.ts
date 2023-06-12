import { PrismaClient } from '@prisma/client';
import { PrismaClient as PrismaClientSQL } from '../../node_modules/@prisma-sql/prisma/client';

export const prisma = new PrismaClient({
  log: ['query'],
});

export const prismaSQL = new PrismaClientSQL({
  log: ['query'],
});
