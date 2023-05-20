import { type Config } from 'drizzle-kit';

export default {
	out: './migrations',
	schema: './app/db/schema.ts',
	breakpoints: true,
} satisfies Config;