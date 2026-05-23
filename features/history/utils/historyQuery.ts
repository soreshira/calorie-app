import { prisma } from "@/lib/prisma";
import { CalorieHistory } from "@/types/calorie";

// 履歴を新しい順に取得
export async function getCalorieHistories(): Promise<CalorieHistory[]> {
  return await prisma.calorieHistory.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}
