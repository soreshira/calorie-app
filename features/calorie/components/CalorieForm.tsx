import InputField from "@/components/ui/InputFiled";
import { CalorieFormValues } from "@/types/calorie";
import { activityLevels } from "../utils/calcCalorie";
import Button from "@/components/ui/Button";

type Props = {
  values: CalorieFormValues;
  onChange: (field: keyof CalorieFormValues, value: string) => void;
  onSubmit: () => void;
  error: string;
};

export default function CalorieForm({
  values,
  onChange,
  onSubmit,
  error,
}: Props) {
  return (
    <div>
      <InputField
        label="体重 (kg)"
        value={values.weight}
        onChange={(value) => onChange("weight", value)}
        placeholder="例: 70"
        inputMode="decimal"
        min={1}
        max={300}
        hint="1〜300kg、小数第1位まで入力できます"
      />
      <InputField
        label="身長 (cm)"
        value={values.height}
        onChange={(value) => onChange("height", value)}
        placeholder="例: 170"
        inputMode="decimal"
        hint="1〜300cm、小数第1位まで入力できます"
        min={1}
        max={300}
      />
      <InputField
        label="年齢"
        value={values.age}
        onChange={(value) => onChange("age", value)}
        placeholder="例: 30"
        inputMode="numeric"
        hint="1〜120歳の整数で入力できます"
      />
      <div className="mb-4">
        <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">
          性別
        </p>
        <div className="flex gap-3">
          {(["male", "female"] as const).map((g) => (
            <label
              key={g}
              className={`flex-1 flex items-center justify-center py-2 rounded border cursor-pointer
                          transition ${
                            values.gender === g
                              ? "border-orange-500 bg-orange-500/10 text-white"
                              : "border-gray-700 text-gray-400"
                          }`}
            >
              <input
                type="radio"
                value={g}
                checked={values.gender === g}
                onChange={() => onChange("gender", g)}
                className="hidden"
              />
              {g === "male" ? "♂ 男性" : "♀ 女性"}
            </label>
          ))}
        </div>
      </div>
      <div className="mb-5">
        <label className="text-xs tracking-widest uppercase text-gray-400 mb-2 block">
          活動レベル
        </label>
        <select
          value={values.activity}
          onChange={(e) => onChange("activity", e.target.value)}
          className="w-full bg-black border border-gray-700 rounded px-3 py-2 text-white
                     focus:outline-none focus:border-orange-500 transition"
        >
          {Object.entries(activityLevels).map(([key, val]) => (
            <option key={key} value={key}>
              {val.label}
            </option>
          ))}
        </select>
      </div>

      <Button onClick={onSubmit}>計算</Button>

      {error && (
        <p className="text-orange-500 text-xs mt-3 text-center">{error}</p>
      )}
    </div>
  );
}
