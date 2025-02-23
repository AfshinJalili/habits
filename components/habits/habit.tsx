
interface Habit {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export function Habit({ habit }: { habit: Habit }) {
  return <div>Habit</div>;
}
