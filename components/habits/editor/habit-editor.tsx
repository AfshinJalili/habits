'use client';

import { EditorContent, useEditor } from '@tiptap/react';
import { StarterKit } from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import { Button } from '@/components/ui/button';
import './styles.css';
import { submitHabit } from './actions';

export default function HabitEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bold: false,
        italic: false,
      }),
      Placeholder.configure({
        placeholder: 'Smoking, drinking, etc.',
      }),
    ],
  });

  const input =
    editor?.getText({
      blockSeparator: '\n',
    }) || '';

  async function onSubmit() {
    await submitHabit(input);
    editor?.commands.clearContent();
  }
  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-card p-5 shadow-sm min-w-100">
      <div className="flex gap-5">
        <EditorContent
          editor={editor}
          className="max-h-[200rem] w-full overflow-y-auto rounded-2xl bg-background border px-5 py-3 "
        />
      </div>
      <div className="flex justify-end">
        <Button
          onClick={onSubmit}
          disabled={!input.trim()}
          className="min-w-20"
        >
          Add
        </Button>
      </div>
    </div>
  );
}
