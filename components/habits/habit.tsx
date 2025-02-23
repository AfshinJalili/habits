'use client';

import { HabitType } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { PencilLine } from 'lucide-react';
import { PlusCircle } from 'lucide-react';
import { addEntry } from './actions';
interface HabitProps {
  habit: HabitType;
}

export function Habit({ habit }: HabitProps) {
  return (
    <div className="flex flex-row items-center gap-4 rounded-2xl bg-card p-4 shadow-sm">
      <div className="flex-1">
        <h3 className="font-medium">{habit.title}</h3>
        <p className="text-sm text-muted-foreground">{habit.description}</p>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" onClick={() => addEntry(habit.id)}>
          <PlusCircle className="h-5 w-5" />
        </Button>
        <Button variant="outline">
          <PencilLine className="h-5 w-5" />
        </Button>
        <Button variant="outline">
          <Trash2 className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
