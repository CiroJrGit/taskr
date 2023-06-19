import { PrismaClient } from '@prisma/client';
import { PrismaClient as PrismaClientMongo } from '../../node_modules/@prisma-mongo/prisma/client';

export const prisma = new PrismaClient({
  log: ['query'],
});

export const prismaMongo = new PrismaClientMongo({
  log: ['query'],
});
