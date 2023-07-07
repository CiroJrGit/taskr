import { PrismaClient } from '@prisma/client';
import { PrismaClient as PrismaClientMongo } from '../../prisma-mongo/@prisma-mongo/prisma/client';

export const prisma = new PrismaClient({
  log: ['query'],
});

export const prismaMongo = new PrismaClientMongo({
  log: ['query'],
});
