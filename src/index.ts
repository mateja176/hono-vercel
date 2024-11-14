import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { handle } from 'hono/vercel';
import { message } from './message';

const app = new Hono();

app.use(cors());

app.get('/', (c) => {
  return c.json({ message: `Hello from ${process.env.VERCEL_REGION}` });
});

const api = new Hono();
api.get('/', (c) => {
  return c.json({ message });
});
api.get('/health', (c) => {
  return c.json({ ok: true });
});
app.route('/api', api);

export const DELETE = handle(app);
export const GET = handle(app);
export const HEAD = handle(app);
export const OPTIONS = handle(app);
export const PATCH = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
