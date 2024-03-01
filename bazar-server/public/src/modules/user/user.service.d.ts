import { PrismaService } from 'src/connections/prisma/prisma.service';
import { CreateUserDto } from 'src/modules/user/dto/create-user.dto';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(userDto: CreateUserDto): Promise<{
        id: string;
        username: string;
        fullName: string;
        password: string;
    }>;
    getByUsername(username: string): Promise<{
        id: string;
        username: string;
        fullName: string;
        password: string;
    }>;
    validatePassword(username: string, password: string): Promise<boolean>;
}
