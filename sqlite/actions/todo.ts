'use server';
import prisma from '@/lib/prisma';
export async function getTodos() {
  return await prisma.todo.findMany();
}

export async function getTodo(id: number) {
  return await prisma.todo.findUnique({
    where: {
      id,
    },
  });
}

export async function updateTodo(id: number) {
  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      task: 'Updated title',
    },
  });
}
