import { describe, it, expect } from "vitest";
import { calcBMR, calcTDEE, calcBulkCalorie } from "./calcCalorie";

describe("calcBMR", () => {
  it("男性のBMRを正しく計算する", () => {
    expect(calcBMR(70, 175, 25, "male")).toBeCloseTo(1673.75);
  });

  it("女性のBMRを正しく計算する", () => {
    // 10*55 + 6.25*160 - 5*25 - 161 = 1289
    expect(calcBMR(55, 160, 25, "female")).toBeCloseTo(1264);
  });
});

// --- calcTDEE ---
describe("calcTDEE", () => {
  it("活動レベル moderate で正しく計算する", () => {
    const bmr = calcBMR(70, 175, 25, "male"); // 1731.75
    const tdee = calcTDEE(bmr, "moderate"); // 1731.75 * 1.55 ≒ 2684
    expect(tdee).toBe(2594);
  });

  it("活動レベルごとに異なる値を返す", () => {
    const bmr = calcBMR(70, 175, 25, "male");
    expect(calcTDEE(bmr, "sedentary")).toBeLessThan(calcTDEE(bmr, "active"));
  });
});

// --- calcBulkCalorie ---
describe("calcBulkCalorie", () => {
  it("リーンバルクは TDEE + 300 になる", () => {
    const { lean } = calcBulkCalorie(2000);
    expect(lean).toBe(2300);
  });

  it("通常バルクは TDEE + 500 になる", () => {
    const { normal } = calcBulkCalorie(2000);
    expect(normal).toBe(2500);
  });
});
