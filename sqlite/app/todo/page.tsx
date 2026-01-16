import { createTodo, getTodos } from '@/actions/todo';
import { Todo } from '@/src/generated/prisma/client';
import Link from 'next/link';

async function Page() {
  const todos = await getTodos();

  return (
    <div className='p-5 space-y-1'>
      <div>
        <form action={createTodo}>
          <input type='text' name='task' id='task' className='outline mr-5' />
          <button>submit</button>
        </form>
      </div>
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
      {todo.task} | <Link href={`/todo/edit/${todo.id}`}>Edit</Link> |{' '}
      <Link href={`/todo/edit/${todo.id}?action=remove`}>Delete</Link>
    </span>
  );
}
