import { OnModuleInit, OnModuleDestroy } from '@nestjs/common';
export declare class PrismaService implements OnModuleInit, OnModuleDestroy {
    private prismaClient;
    private logger;
    constructor();
    get contact(): any;
    onModuleInit(): Promise<void>;
    onModuleDestroy(): Promise<void>;
}
