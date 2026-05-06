import { Injectable, OnModuleInit, OnModuleDestroy, Logger } from '@nestjs/common';

let PrismaClientClass: any;

try {
  // Try to import from @prisma/client first
  const { PrismaClient } = require('@prisma/client');
  PrismaClientClass = PrismaClient;
} catch (e) {
  // Fallback to generated client
  try {
    const { PrismaClient } = require('../generated/prisma');
    PrismaClientClass = PrismaClient;
  } catch (e2) {
    Logger.error('Could not load PrismaClient from any source');
  }
}

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  private prismaClient: any;
  private logger = new Logger('PrismaService');

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
        $connect: async () => {},
        $disconnect: async () => {},
      };
    } else {
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
}
