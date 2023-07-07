import { FastifyInstance } from 'fastify';
import { prismaMongo } from '../lib/prisma';
import { z } from 'zod';

export async function tasklistsRoute(app: FastifyInstance) {
  app.addHook('preHandler', async (request) => {
    await request.jwtVerify();
  });

  app.get('/tasklists', async (request) => {
    const tasklists = await prismaMongo.taskList.findMany({
      where: {
        userId: request.user.sub,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    return tasklists.map((tasklist) => {
      return {
        id: tasklist.id,
        title: tasklist.title,
        color: tasklist.color,
        deleted: tasklist.deleted,
      };
    });
  });

  app.get('/tasklists/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(request.params);

    const tasklist = await prismaMongo.taskList.findUniqueOrThrow({
      where: {
        id,
      },
    });

    if (tasklist.userId !== request.user.sub) {
      return reply.status(401).send();
    }

    return tasklist;
  });

  app.post('/tasklists', async (request) => {
    const bodySchema = z.object({
      title: z.string(),
    });

    const { title } = bodySchema.parse(request.body);

    const tasklist = await prismaMongo.taskList.create({
      data: {
        title,
        userId: request.user.sub,
      },
    });

    return tasklist;
  });

  app.put('/tasklists/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(request.params);

    const bodySchema = z.object({
      title: z.string(),
      color: z.string(),
      deleted: z.boolean(),
    });

    const { title, color, deleted } = bodySchema.parse(request.body);

    let tasklist = await prismaMongo.taskList.findFirstOrThrow({
      where: {
        id,
      },
    });

    if (tasklist.userId !== request.user.sub) {
      return reply.status(401).send();
    }

    tasklist = await prismaMongo.taskList.update({
      where: {
        id,
      },
      data: {
        title,
        color,
        deleted,
      },
    });

    return tasklist;
  });

  app.delete('/tasklists/:id', async (request, reply) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(request.params);

    const tasklist = await prismaMongo.taskList.findFirstOrThrow({
      where: {
        id,
      },
    });

    if (tasklist.userId !== request.user.sub) {
      return reply.status(401).send();
    }

    await prismaMongo.taskList.delete({
      where: {
        id,
      },
    });
  });
}
