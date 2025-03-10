import Image from 'next/image';
import HabitEditor from '@/components/habits/editor/habit-editor';
import { ModeToggle } from '@/components/mode-toggle';
import { HabitList } from '@/components/habits/habit-list';
export default function Home() {
  return (
    <div className="w-full min-w-0 space-y-5 p-4">
      <header className="flex justify-end">
        <ModeToggle />
      </header>
      <main className="flex w-full flex-col md:flex-row gap-5 justify-center items-center">
        <HabitEditor />
        <HabitList />
      </main>
      <footer className="row-start-3 flex gap-4 sm:gap-6 flex-wrap items-center justify-center text-sm sm:text-base">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
            className="w-3 h-3 sm:w-4 sm:h-4"
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
            className="w-3 h-3 sm:w-4 sm:h-4"
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
            className="w-3 h-3 sm:w-4 sm:h-4"
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
