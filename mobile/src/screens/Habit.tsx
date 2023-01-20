import { View, Text, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { BackButton } from "../components/BackButton";
import dayjs from "dayjs";
import { ProgressBar } from "../components/ProgressBar";
import { Checkbox } from "../components/Checkbox";

interface HabitProps {
  date: string;
}

export function Habit() {
  const route = useRoute();
  const { date } = route.params as HabitProps;

  const pasedDate = dayjs(date);
  const dayOfWeek = pasedDate.format("dddd");
  const dayAndMonth = pasedDate.format("DD/MM");

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <BackButton />

        <Text className="mt-6 text-zinc-400 font-semibold text-base lowercase">
          {dayOfWeek}
        </Text>

        <Text className=" text-white font-extrabold text-3xl ">
          {dayAndMonth}
        </Text>

        <ProgressBar progress={10} />

        <View className="mt-6">
          <Checkbox title="Beber 3L de água" checked={false} />

          <Checkbox title="Estudar" checked={true} />
        </View>
      </ScrollView>
    </View>
  );
}
