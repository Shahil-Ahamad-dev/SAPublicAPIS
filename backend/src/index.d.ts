import { PrismaClient } from "@prisma/client";

declare namespace Express {
  export interface Request {
    user: {
      id: string;
      username: string;
      email: string;
      role: string;
    };
    prisma: PrismaClient;
  }
}
declare global {
  namespace Express {
    interface Request {
      db: PrismaClient;
    }
  }
}
