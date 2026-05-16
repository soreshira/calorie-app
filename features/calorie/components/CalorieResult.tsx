import { CalorieResultType } from "@/types/calorie";

type Props = { result: CalorieResultType };

export default function CalorieResult({ result }: Props) {
  const items = [
    {
      tag: "Maintenance",
      name: "維持カロリー",
      desc: "現状維持の目安",
      kcal: result.tdee,
      color: "text-white",
      border: "border-gray-700",
    },
    {
      tag: "Lean Bulk +300",
      name: "リーンバルク",
      desc: "脂肪を抑えながら増量",
      kcal: result.lean,
      color: "text-orange-400",
      border: "border-orange-500",
    },
    {
      tag: "Normal Bulk +500",
      name: "通常バルク",
      desc: "しっかり筋肉をつける増量",
      kcal: result.normal,
      color: "text-orange-500",
      border: "border-orange-600",
    },
  ];

  return (
    <div className="mt-6 flex flex-col gap-3">
      {items.map((item, i) => (
        <div
          key={i}
          className={`border ${item.border} rounded p-4 flex justify-between items-center`}
        >
          <div>
            <p className="text-xs tracking-widest text-gray-500 uppercase">
              {item.tag}
            </p>
            <p className="font-bold text-white">{item.name}</p>
            <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
          </div>
          <div className="text-right">
            <p className={`text-3xl font-black ${item.color}`}>{item.kcal}</p>
            <p className="text-xs text-gray-500">kcal / day</p>
          </div>
        </div>
      ))}
    </div>
  );
}
