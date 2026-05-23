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
  saving: boolean;
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
  const [saving, setSaving] = useState(false);

  // フォームの任意フィールドを更新
  const handleChange = (field: keyof CalorieFormValues, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  // バリデーション→計算→結果セット
  const handleSubmit = async () => {
    const { weight, height, age, gender, activity } = formValues;
    if (!weight || !height || !age) {
      setError("全ての項目を入力してください");
      return;
    }
    setError("");

    const bmr = calcBMR(Number(weight), Number(height), Number(age), gender);

    const tdee = calcTDEE(bmr, activity);
    const bulk = calcBulkCalorie(tdee);
    setResult({ tdee, ...bulk });

    // 計算結果をDBに保存する
    setSaving(true);
    await fetch("/api/history", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        weight: parseFloat(weight),
        height: parseFloat(height),
        age: Number(age),
        gender,
        activity,
        lean: tdee,
        normal: bulk,
      }),
    });
    setSaving(false);
  };

  return { formValues, result, saving, error, handleChange, handleSubmit };
}
