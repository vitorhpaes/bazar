import { PrismaClient } from '@prisma/client';
import createDefaultUser from './seeders/user';

const prisma = new PrismaClient();

async function main() {
  await createDefaultUser(prisma);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
