import { HabitType } from '@/lib/types';
import { Habit } from './habit';
import prisma from '@/lib/prisma';
interface HabitListProps {
  habits: HabitType[];
}

export async function HabitList() {
  const habits = await getHabits();
  return (
    <div className="flex flex-col gap-4 w-full sm:w-[500px] md:w-[600px] lg:w-[700px]">
      {habits.map((habit) => (
        <Habit key={habit.id} habit={habit} />
      ))}
    </div>
  );
}

async function getHabits() {
  const habits = await prisma.habit.findMany();
  return habits;
}
