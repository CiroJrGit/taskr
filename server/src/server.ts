import 'dotenv/config';

import fastify from 'fastify';
import cors from '@fastify/cors';
import { tasklistsRoute } from './routes/tasklists';

const app = fastify();

app.register(cors, {
  origin: true,
});

app.register(tasklistsRoute);

app.get('/hello', () => {
  return 'Hello World!';
});

// app.get('/test-sqlite', async () => {
//   const users = await prismaSQL.user.findMany();

//   return users;
// });

// app.get('/test-mongo', async () => {
//   const tasklists = await prisma.user.findMany();

//   return tasklists;
// });

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:3333');
  });
