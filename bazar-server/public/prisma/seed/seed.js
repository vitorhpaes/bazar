"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const user_1 = require("./seeders/user");
const prisma = new client_1.PrismaClient();
async function main() {
    await (0, user_1.default)(prisma);
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map