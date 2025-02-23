'use server';

import prisma from "@/lib/prisma";
import { HabitType } from "@/lib/types";
export async function deleteHabit(id: string) {
    await prisma.habit.delete({
        where: { id },
    });
}

export async function updateHabit(id: string, data: HabitType) {
    await prisma.habit.update({
        where: { id },
        data,
    });
}

export async function addEntry(id: string) {
    await prisma.habitEntry.create({
        data: {
            habitId: id,
        },
    });
}
