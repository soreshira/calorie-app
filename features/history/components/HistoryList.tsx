import { CalorieHistory } from "@/types/calorie";

// 活動レベルの日本語ラベル
const activityLabel: Record<string, string> = {
  sedentary: "ほぼ運動しない",
  light: "週1〜3回運動",
  moderate: "週3〜5回運動",
  active: "週6〜7回運動",
};

type Props = {
  histories: CalorieHistory[];
};

export default function HistoryList({ histories }: Props) {
  if (histories.length === 0) {
    return (
      <p className="text-gray-500 text-sm text-center mt-10">
        履歴がありません
      </p>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {histories.map((h) => (
        <div
          key={h.id}
          className="bg-neutral-900 border border-neutral-800 border-t-2 border-t-orange-500
                     rounded p-6"
        >
          {/* 日時 */}
          <p className="text-xs text-gray-500 mb-4">
            {new Date(h.createdAt).toLocaleString("ja-JP")}
          </p>

          {/* 入力値 */}
          <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest">
                体重
              </p>
              <p className="text-white font-bold">{h.weight} kg</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest">
                身長
              </p>
              <p className="text-white font-bold">{h.height} cm</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest">
                年齢
              </p>
              <p className="text-white font-bold">{h.age} 歳</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest">
                性別
              </p>
              <p className="text-white font-bold">
                {h.gender === "male" ? "男性" : "女性"}
              </p>
            </div>
            <div className="col-span-2">
              <p className="text-xs text-gray-500 uppercase tracking-widest">
                活動レベル
              </p>
              <p className="text-white font-bold">
                {activityLabel[h.activity]}
              </p>
            </div>
          </div>

          {/* 計算結果 */}
          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-neutral-800">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest">
                維持
              </p>
              <p className="text-white font-bold">
                {h.tdee} <span className="text-xs text-gray-500">kcal</span>
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest">
                リーン
              </p>
              <p className="text-orange-400 font-bold">
                {h.lean} <span className="text-xs text-gray-500">kcal</span>
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest">
                通常
              </p>
              <p className="text-orange-500 font-bold">
                {h.normal} <span className="text-xs text-gray-500">kcal</span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
