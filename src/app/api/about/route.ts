// src/app/api/about/route.ts
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Get about page data
export async function GET() {
  const about = await prisma.about.findFirst({
    include: {
      services: true,
      companies: true,
    },
  });

  return NextResponse.json(about || {});
}

// Create new about data (only if none exists)
export async function POST(req: NextRequest) {
  const existing = await prisma.about.findFirst();
  if (existing) {
    return NextResponse.json({ error: "Already exists" }, { status: 400 });
  }

  const body = await req.json();
  const { services, companies, ...aboutData } = body;

  const about = await prisma.about.create({
    data: {
      ...aboutData,
      services: {
        create: services,
      },
      companies: {
        create: companies,
      },
    },
  });

  return NextResponse.json(about);
}

// Update existing about data
export async function PUT(req: NextRequest) {
  const body = await req.json();
  const { id, services, companies, ...aboutData } = body;

  // Delete existing nested items
  await prisma.service.deleteMany({ where: { aboutId: id } });
  await prisma.company.deleteMany({ where: { aboutId: id } });

  const updated = await prisma.about.update({
    where: { id },
    data: {
      ...aboutData,
      services: {
        create: services,
      },
      companies: {
        create: companies,
      },
    },
  });

  return NextResponse.json(updated);
}
