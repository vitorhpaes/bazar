import { PrismaClient } from '.prisma/client';
import * as bcrypt from 'bcryptjs';
import * as dotenv from 'dotenv';

dotenv.config();

async function createDefaultUser(prisma: PrismaClient) {
  const ADMIN_INITIAL_PASSWORD = process.env.ADMIN_INITIAL_PASSWORD;
  const ADMIN_INITIAL_USERNAME = process.env.ADMIN_INITIAL_USERNAME;

  const existingUser = await prisma.user.findFirst({
    where: {
      username: ADMIN_INITIAL_USERNAME,
    },
  });

  if (existingUser) return;

  return await prisma.user.create({
    data: {
      fullName: 'Administrador',
      username: ADMIN_INITIAL_USERNAME,
      password: await bcrypt.hash(ADMIN_INITIAL_PASSWORD, 12),
    },
  });
}

export default createDefaultUser;
