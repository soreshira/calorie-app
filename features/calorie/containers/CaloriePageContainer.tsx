"use client";

import CalorieForm from "../components/CalorieForm";
import CalorieResult from "../components/CalorieResult";
import { useCalorie } from "../hooks/useCalorie";

export default function CaloriePageContainer() {
  const { formValues, result, error, handleChange, handleSubmit } =
    useCalorie();

  return (
    <div className="bg-neutral-900 border boder-neutral-800 border-t-2 border-t-orange-500 rounded p-8 w-full max-w-md">
      <CalorieForm
        values={formValues}
        onChange={handleChange}
        onSubmit={handleSubmit}
        error={error}
      />
      {result && <CalorieResult result={result} />}
    </div>
  );
}
