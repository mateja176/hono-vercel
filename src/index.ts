import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import { message } from './message';

const basePath: string = '/api';
const app = new Hono().basePath(basePath);

app.get('/', (c) => {
  return c.json({ message });
});

// https://vercel.com/docs/functions/quickstart#create-an-api-route
export const GET = handle(app);
export const POST = handle(app);
