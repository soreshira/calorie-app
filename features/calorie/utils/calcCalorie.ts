import { ActivityLevel, CalorieResultType } from "@/types/calorie";

/** 活動レベルの係数を設定する */
export const activityLevels: Record<
  ActivityLevel,
  { label: string; factor: number }
> = {
  sedentary: { label: "ほぼ運動しない", factor: 1.2 },
  light: { label: "週1~3回運動", factor: 1.375 },
  moderate: { label: "週3~5回運動", factor: 1.55 },
  active: { label: "週6~7回運動", factor: 1.725 },
};

/** 基礎代謝(BMR)をMifflin-St Jeor式で計算する */
export function calcBMR(
  weight: number,
  height: number,
  age: number,
  gender: "male" | "female",
): number {
  const base = 10 * weight + 6.25 * height - 5 * age;
  return gender === "male" ? base + 5 : base - 161;
}

/** 総消費カロリー(TDEE) = BMR * 活動係数 */
export function calcTDEE(bmr: number, activity: ActivityLevel): number {
  return Math.round(bmr * activityLevels[activity].factor);
}

/** 増量に必要な摂取カロリー */
export function calcBulkCalorie(
  tdee: number,
): Pick<CalorieResultType, "lean" | "normal"> {
  return {
    lean: tdee + 300, // リーンバルク
    normal: tdee + 500, // 通常バルク
  };
}
