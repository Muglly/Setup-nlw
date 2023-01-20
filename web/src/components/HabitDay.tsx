import * as Popover from "@radix-ui/react-popover";
import { ProgressBar } from "./ProgressBar";

export function HabitDay() {
  return (
    <Popover.Root>
      <Popover.Trigger className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-lg cursor-pointer" />

      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
          <span className="font-semibold text-zinc-400">sexta-feira</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">
            20/01/2023
          </span>
          <ProgressBar progress={90} />
          <Popover.Arrow width={16} height={8} className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
