import { Hono } from 'hono';
import { handle } from 'hono/vercel';
import { message } from './message';

const app = new Hono();

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

export default handle(app);
