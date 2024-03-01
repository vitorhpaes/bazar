import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(data: AuthDto): Promise<{
        user: {
            id: string;
            username: string;
            fullName: string;
            password: string;
        };
        token: string;
    }>;
}
