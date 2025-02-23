import { Prisma } from '@prisma/client';

export type HabitType = Prisma.HabitGetPayload<{}>;

export type HabitEntryType = Prisma.HabitEntryGetPayload<{}>;
