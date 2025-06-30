// src/app/api/login/route.ts
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const body = await req.json();

  const validEmail = process.env.OWNER_EMAIL;
  const validPassword = process.env.OWNER_PASSWORD;

  if (body.email === validEmail && body.password === validPassword) {
    const token = jwt.sign({ email: body.email }, process.env.JWT_SECRET!, {
      expiresIn: "7d",
    });

    return NextResponse.json({ token }, { status: 200 });
  }

  return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
}
