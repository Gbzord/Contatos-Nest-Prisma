"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaService = void 0;
const common_1 = require("@nestjs/common");
let PrismaClientClass;
try {
    const { PrismaClient } = require('@prisma/client');
    PrismaClientClass = PrismaClient;
}
catch (e) {
    try {
        const { PrismaClient } = require('../generated/prisma');
        PrismaClientClass = PrismaClient;
    }
    catch (e2) {
        common_1.Logger.error('Could not load PrismaClient from any source');
    }
}
let PrismaService = class PrismaService {
    prismaClient;
    logger = new common_1.Logger('PrismaService');
    constructor() {
        if (!PrismaClientClass) {
            this.logger.warn('PrismaClient not available - mock mode');
            this.prismaClient = {
                contact: {
                    create: async () => ({}),
                    findMany: async () => [],
                    findUnique: async () => null,
                    update: async () => ({}),
                    delete: async () => ({}),
                },
                $connect: async () => { },
                $disconnect: async () => { },
            };
        }
        else {
            this.prismaClient = new PrismaClientClass();
        }
    }
    get contact() {
        return this.prismaClient.contact;
    }
    async onModuleInit() {
        await this.prismaClient.$connect();
        this.logger.log('Prisma connected');
    }
    async onModuleDestroy() {
        await this.prismaClient.$disconnect();
        this.logger.log('Prisma disconnected');
    }
};
exports.PrismaService = PrismaService;
exports.PrismaService = PrismaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], PrismaService);
//# sourceMappingURL=prisma.service.js.map