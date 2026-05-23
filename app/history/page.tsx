import { getCalorieHistories } from "@/features/history/utils/historyQuery";
import HistoryList from "@/features/history/components/HistoryList";

export default async function HistoryPage() {
  //サーバー側でDBから直接取得する
  const histories = await getCalorieHistories();

  return (
    <main className="min-h-screen be-neutral-950 text-white flex flex-col items-center px-4 py-6">
      <div className="text-center mb-10">
        <p className="text-xs tracking-widest text-orange-500 uppercase mb-2">
          Calorie History
        </p>
        <h1 className="text-6xl font-black tracking-tight">HISTORY</h1>
        <p className="text-sm text-gray-400 mt-3">計算履歴の一覧</p>
      </div>

      <div className="w-full max-w-md">
        <HistoryList histories={histories} />
      </div>
    </main>
  );
}
