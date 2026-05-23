import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const history = await prisma.calorieHistory.create({
    data: {
      weight: body.weight,
      height: body.height,
      age: body.age,
      gender: body.gender,
      activity: body.activity,
      tdee: body.tdee,
      lean: body.lean,
      normal: body.normal,
    },
  });

  return NextResponse.json(history);
}
