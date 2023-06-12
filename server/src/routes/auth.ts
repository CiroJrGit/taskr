import { FastifyInstance } from 'fastify';
import { prisma, prismaSQL } from '../lib/prisma';
import { z } from 'zod';

export async function authRoutes(app: FastifyInstance) {
  app.post('/register', async (request) => {
    const bodySchema = z.object({
      id: z.string(),
      name: z.string(),
      email: z.string(),
    });

    const { id, name, email } = bodySchema.parse(request.body);

    const registerUser = await prisma.user.create({
      data: {
        id,
      },
    });

    const registerUserSQL = await prismaSQL.user.create({
      data: {
        id,
        name,
        email,
      },
    });

    return {
      registerUser,
      registerUserSQL,
    };
  });
}
