"use client";

import { CalorieFormValues, CalorieResultType } from "@/types/calorie";
import { useState } from "react";
import { calcBMR, calcBulkCalorie, calcTDEE } from "../utils/calcCalorie";

type UseCalorieReturn = {
  formValues: CalorieFormValues;
  result: CalorieResultType | null;
  error: string;
  handleChange: (field: keyof CalorieFormValues, value: string) => void;
  handleSubmit: () => void;
};

export function useCalorie(): UseCalorieReturn {
  const [formValues, setFormValues] = useState<CalorieFormValues>({
    weight: "",
    height: "",
    age: "",
    gender: "male",
    activity: "moderate",
  });
  const [result, setResult] = useState<CalorieResultType | null>(null);
  const [error, setError] = useState("");

  // フォームの任意フィールドを更新
  const handleChange = (field: keyof CalorieFormValues, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  // バリデーション→計算→結果セット
  const handleSubmit = () => {
    const { weight, height, age, gender, activity } = formValues;
    if (!weight || !height || !age) {
      setError("全ての項目を入力してください");
      return;
    }
    setError("");

    const bmr = calcBMR(Number(weight), Number(height), Number(age), gender);

    const tdee = calcTDEE(bmr, activity);
    setResult({ tdee, ...calcBulkCalorie(tdee) });
  };

  return { formValues, result, error, handleChange, handleSubmit };
}
