import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const trabajos = await prisma.trabajos.findMany();
  res.status(200).json(trabajos);
}
