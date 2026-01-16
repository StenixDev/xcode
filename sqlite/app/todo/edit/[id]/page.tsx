import { getTodo, updateTodo } from '@/actions/todo';
import Link from 'next/link';

type PageProps = {
  params: Promise<{
    id: number;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const todo = await getTodo(Number(id));

  return (
    <form action={updateTodo} className='space-y-5 flex flex-col w-xs'>
      <h1>
        Edit Task | <Link href={'/todo'}>Home</Link>
      </h1>
      <input type='hidden' name='id' value={todo?.id} id='id' />
      <input
        type='text'
        name='task'
        id='task'
        defaultValue={todo?.task}
        className='border'
      />
      <button className='bg-blue-500 text-white'>Save Changes</button>
    </form>
  );
}
