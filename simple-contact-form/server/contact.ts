'use server';

import { db } from '@/db/drizzle';
import { contact } from '@/db/schema';

export async function createContact(email: string, message: string) {
  try {
    await db.insert(contact).values({ email, message });
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create contact');
  }
}
