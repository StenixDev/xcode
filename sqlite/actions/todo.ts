'use server';
import prisma from '@/lib/prisma';
import { redirect } from 'next/navigation';
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

export async function createTodo(formData: FormData) {
  const task = formData.get('task') as string;

  if (!task || !task.trim()) {
    return;
  }

  await prisma.todo.create({
    data: {
      task,
    },
  });

  redirect('/todo');
}

export async function updateTodo(formData: FormData) {
  const id = Number(formData.get('id'));
  const task = formData.get('task') as string;

  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      task,
    },
  });

  redirect('/todo');
}

export async function todoDelete(id: number) {
  await prisma.todo.delete({
    where: {
      id,
    },
  });

  redirect('/todo');
}
