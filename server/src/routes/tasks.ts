import { FastifyInstance } from 'fastify';
import { prismaMongo } from '../lib/prisma';
import { z } from 'zod';

export async function tasksRoute(app: FastifyInstance) {
  app.addHook('preHandler', async (request) => {
    await request.jwtVerify();
  });

  app.get('/tasks/:taskListId', async (request) => {
    const paramsSchema = z.object({
      taskListId: z.string(),
    });

    const { taskListId } = paramsSchema.parse(request.params);

    const tasks = await prismaMongo.task.findMany({
      where: {
        taskListId,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    return tasks.map((task) => {
      return {
        id: task.id,
        desc: task.desc,
        completed: task.completed,
      };
    });
  });

  app.post('/tasks', async (request) => {
    const bodySchema = z.object({
      desc: z.string(),
      taskListId: z.string(),
    });

    const { desc, taskListId } = bodySchema.parse(request.body);

    const task = await prismaMongo.task.create({
      data: {
        desc,
        taskListId,
      },
    });

    return task;
  });

  app.put('/tasks/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(request.params);

    const bodySchema = z.object({
      desc: z.string(),
    });

    const { desc } = bodySchema.parse(request.body);

    let task = await prismaMongo.task.findFirstOrThrow({
      where: {
        id,
      },
    });

    task = await prismaMongo.task.update({
      where: {
        id,
      },
      data: {
        desc,
      },
    });

    return task;
  });

  app.put('/tasks/:id/toggle', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(request.params);

    const bodySchema = z.object({
      completed: z.boolean(),
    });

    const { completed } = bodySchema.parse(request.body);

    let task = await prismaMongo.task.findFirstOrThrow({
      where: {
        id,
      },
    });

    if (task.completed === completed) return;
    else {
      task = await prismaMongo.task.update({
        where: {
          id,
        },
        data: {
          completed,
        },
      });
    }

    return task;
  });

  app.delete('/tasks/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(request.params);

    await prismaMongo.task.findFirstOrThrow({
      where: {
        id,
      },
    });

    await prismaMongo.task.delete({
      where: {
        id,
      },
    });
  });

  app.delete('/tasks/:id/all', async (request) => {
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(request.params);

    await prismaMongo.task.findMany({
      where: {
        taskListId: id,
      },
    });

    await prismaMongo.task.deleteMany({
      where: {
        taskListId: id,
      },
    });
  });
}
