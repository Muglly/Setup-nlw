import clsx from "clsx";
import dayjs from "dayjs";
import { HabitList } from "./HabitList";
import { ProgressBar } from "./ProgressBar";
import * as Popover from "@radix-ui/react-popover";

interface HabitDayProps {
  date: Date;
  completed?: number;
  amount?: number;
}

export function HabitDay({ completed = 0, amount = 0, date }: HabitDayProps) {
  const completedPorcentage =
    amount > 0 ? Math.round((completed / amount) * 100) : 0;

  const dayAndMonth = dayjs(date).format("DD/MM/YYYY");
  const dayOfWeek = dayjs(date).format("dddd");

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx("w-10 h-10  rounded-lg cursor-pointer", {
          "bg-zinc-900 border border-zinc-800 ": completedPorcentage == 0,
          "bg-violet-900 border-violet-700":
            completedPorcentage > 0 && completedPorcentage < 20,
          "bg-violet-800 border-violet-600":
            completedPorcentage >= 20 && completedPorcentage < 40,
          "bg-violet-700 border-violet-500":
            completedPorcentage >= 40 && completedPorcentage < 60,
          "bg-violet-600 border-violet-500":
            completedPorcentage >= 60 && completedPorcentage < 80,
          "bg-violet-500 border-violet-400": completedPorcentage >= 80,
        })}
      />

      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
          <span className="font-semibold text-zinc-400">{dayOfWeek}</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">
            {dayAndMonth}
          </span>

          <ProgressBar progress={completedPorcentage} />

          <HabitList date={date} />

          <Popover.Arrow width={16} height={8} className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
