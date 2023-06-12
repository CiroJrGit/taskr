import { FastifyInstance } from 'fastify';
import { prisma } from '../lib/prisma';
import { z } from 'zod';

export async function tasklistsRoute(app: FastifyInstance) {
  app.get('/tasklists', async () => {
    const tasklists = await prisma.taskList.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    });

    return tasklists.map((tasklist) => {
      return {
        id: tasklist.id,
        title: tasklist.title,
        color: tasklist.color,
      };
    });
  });

  app.get('/tasklists/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(request.params);

    const tasklist = await prisma.taskList.findUniqueOrThrow({
      where: {
        id,
      },
    });

    return tasklist;
  });

  app.post('/tasklists', async (request) => {
    const bodySchema = z.object({
      title: z.string(),
    });

    const { title } = bodySchema.parse(request.body);

    const tasklist = await prisma.taskList.create({
      data: {
        title,
        userId: '6cbfed82-30f8-4594-950e-1219a60978fa',
      },
    });

    return tasklist;
  });

  app.put('/tasklists/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(request.params);

    const bodySchema = z.object({
      title: z.string(),
      color: z.string(),
    });

    const { title, color } = bodySchema.parse(request.body);

    const tasklist = await prisma.taskList.update({
      where: {
        id,
      },
      data: {
        title,
        color,
      },
    });

    return tasklist;
  });

  app.delete('/tasklists/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(request.params);

    await prisma.taskList.delete({
      where: {
        id,
      },
    });
  });
}
