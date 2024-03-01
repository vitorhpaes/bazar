"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
dotenv.config();
async function createDefaultUser(prisma) {
    const ADMIN_INITIAL_PASSWORD = process.env.ADMIN_INITIAL_PASSWORD;
    const ADMIN_INITIAL_USERNAME = process.env.ADMIN_INITIAL_USERNAME;
    return await prisma.user.create({
        data: {
            fullName: 'Administrador',
            username: ADMIN_INITIAL_USERNAME,
            password: await bcrypt.hash(ADMIN_INITIAL_PASSWORD, 12),
        },
    });
}
exports.default = createDefaultUser;
//# sourceMappingURL=user.js.map