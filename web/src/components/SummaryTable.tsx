import { HabitDay } from "./HabitDay";

export function SummaryTable() {
  const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

  return (
    <div className="w-full flex">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((week, i) => {
          return (
            <div
              key={`day-${i}`}
              className="text-zinc-400 font-bold text-xl h-10 w-10 flex items-center justify-center"
            >
              {week}
            </div>
          );
        })}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
        <HabitDay />
      </div>
    </div>
  );
}
