import { FastifyInstance } from 'fastify';
import { prisma, prismaMongo } from '../lib/prisma';
import { z } from 'zod';

export async function authRoutes(app: FastifyInstance) {
  app.post('/register', async (request) => {
    const bodySchema = z.object({
      id: z.string(),
      name: z.string(),
      email: z.string(),
    });

    const { id, name, email } = bodySchema.parse(request.body);

    await prisma.user.create({
      data: {
        id,
        name,
        email,
      },
    });

    await prismaMongo.user.create({
      data: {
        id,
      },
    });

    const token = app.jwt.sign(
      {
        name,
        email,
      },
      {
        sub: id,
        expiresIn: '30 days',
      },
    );

    return {
      token,
    };
  });

  app.get('/authenticate/:id', async (request) => {
    const paramsSchema = z.object({
      id: z.string(),
    });

    const { id } = paramsSchema.parse(request.params);

    const user = await prisma.user.findUniqueOrThrow({
      where: {
        id,
      },
    });

    const { name, email } = user;

    const token = app.jwt.sign(
      {
        name,
        email,
      },
      {
        sub: user.id,
        expiresIn: '30 days',
      },
    );

    return {
      token,
    };
  });
}
