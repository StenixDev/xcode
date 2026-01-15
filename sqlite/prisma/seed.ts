import { PrismaClient } from '../src/generated/prisma/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';

// Create the Prisma adapter for local SQLite file
const adapter = new PrismaLibSql({
  url: 'file:./dev.db',
});

// Pass the adapter to PrismaClient
const prisma = new PrismaClient({ adapter });

export async function main() {
  await prisma.todo.createMany({
    data: [
      { task: 'Learn Next.js' },
      { task: 'Use Prisma 7' },
      { task: 'SQLite seed data' },
    ],
  });
}

main().finally(async () => {
  await prisma.$disconnect();
});
