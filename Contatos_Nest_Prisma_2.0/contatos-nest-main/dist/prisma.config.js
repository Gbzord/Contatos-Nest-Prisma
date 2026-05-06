"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
exports.default = {
    datasources: {
        db: {
            url: process.env.DATABASE_URL,
        },
    },
};
//# sourceMappingURL=prisma.config.js.map