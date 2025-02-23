"use server";

import prisma from "@/lib/prisma";
import { createHabitSchema } from "@/lib/validation";

export async function submitHabit(input: string) {
  const { title, description } = createHabitSchema.parse({ title: input });

  await prisma.habit.create({
    data: { title, description },
  });

  return { success: true };
}
