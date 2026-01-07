import { ContactForm } from '@/components/contact-form';

export default function Home() {
  return (
    <main className='flex flex-col gap-5 items-center justify-center my-20'>
      <h1 className='font-bold'>Simple Contact Form</h1>
      <ContactForm />
    </main>
  );
}
