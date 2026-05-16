import { isValidDecimalInput, isValidNumericInput } from "@/utils/filterInput";

type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  inputMode?: "decimal" | "numeric"; // 追加: 入力モードを指定するプロパティ
  hint?: string; // 追加: ヒントテキストを表示するプロパティ
  max?: number; // 追加: decimalモードの最大値
  min?: number; // 追加: decimalモードの最小値
};

export default function InputField({
  label,
  value,
  onChange,
  placeholder,
  inputMode,
  hint,
  max = 999,
  min = 0,
}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    if (inputMode === "decimal" && !isValidDecimalInput(val, max, min)) return;
    if (inputMode === "numeric" && !isValidNumericInput(val)) return;

    onChange(val);
  };

  return (
    <div className="flex flex-col gap-1 mb-4">
      <label className="text-xs traking-widest uppercase text-gray-400">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="bg-black border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:border-range-500 transition"
      />
      {hint && <p className="text-gray-500 text-xs mt-1">{hint}</p>}
    </div>
  );
}
