interface HabitProps {
  completed: number;
}

export default function Habit(props: HabitProps) {
  return <div>{props.completed}</div>;
}
