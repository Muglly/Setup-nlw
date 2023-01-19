import { generateRangeDatesFromYearStart } from "../utils/generate-range-dates-from-year-start";
import { HabitDay } from "./HabitDay";

export function SummaryTable() {
  const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
  const summaryDates = generateRangeDatesFromYearStart();

  console.log(summaryDates);

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
        {summaryDates.map((date) => {
          return <HabitDay key={`Day-${date}`} />;
        })}
      </div>
    </div>
  );
}
