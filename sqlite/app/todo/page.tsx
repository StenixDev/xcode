import prisma from '@/lib/prisma';
import { Todo } from '@/src/generated/prisma/client';

async function Page() {
  const todos = await prisma.todo.findMany();

  return (
    <div>
      {todos.map((todo) => (
        <Task key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
export default Page;

function Task({ todo }: { todo: Todo }) {
  return <span className='block'>{todo.task}</span>;
}
