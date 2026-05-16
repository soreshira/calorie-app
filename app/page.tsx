import CaloriePageContainer from "@/features/calorie/containers/CaloriePageContainer";

export default function Page() {
  return (
    <main
      className="min-h-screen bg-neutral-950 text-white flex flex-col items-center
                     px-4 py-16"
    >
      <div className="text-center mb-10">
        <p className="text-xs tracking-widest text-orange-500 uppercase mb-2">
          Muscle Gain Calculator
        </p>
        <h1 className="text-6xl font-black tracking-tight">
          CALORIE
          <br />
          <span className="text-orange-500">CALC</span>
        </h1>
        <p className="text-sm text-gray-400 mt-3">
          筋肉増量のための摂取カロリー計算
        </p>
      </div>
      <CaloriePageContainer />
    </main>
  );
}
