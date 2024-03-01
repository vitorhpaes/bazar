import { PrismaClient } from '.prisma/client';
declare function createDefaultUser(prisma: PrismaClient): Promise<{
    id: string;
    username: string;
    fullName: string;
    password: string;
}>;
export default createDefaultUser;
