import { PrismaClient } from '../src/generated/prisma/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';

const globalForPrisma = global as unknown as {
  prisma: PrismaClient;
};

const adapter = new PrismaLibSql({
  url: 'file:./dev.db',
});

const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    adapter,
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
