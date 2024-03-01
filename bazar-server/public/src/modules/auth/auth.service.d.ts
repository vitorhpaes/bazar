import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/modules/user/user.service';
export declare class AuthService {
    private readonly jwtService;
    private readonly user;
    constructor(jwtService: JwtService, user: UserService);
    login(username: string, password: string): Promise<{
        user: {
            id: string;
            username: string;
            fullName: string;
            password: string;
        };
        token: string;
    }>;
}
