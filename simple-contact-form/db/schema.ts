import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const contact = pgTable('contact', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: text('email').notNull(),
  message: text('message').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
