import { getTodos } from '@/actions/todo';
import { Todo } from '@/src/generated/prisma/client';
import Link from 'next/link';

async function Page() {
  const todos = await getTodos();

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
  return (
    <span className='block'>
      {todo.task} | <Link href={`/todo/edit/${todo.id}`}>edit</Link>
    </span>
  );
}
