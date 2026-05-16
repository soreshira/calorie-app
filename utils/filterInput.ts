// 体重・身長用：整数3桁+小数1位まで、範囲は呼び出し元が指定
// 途中入力（"70." など）も通す
export function isValidDecimalInput(
  value: string,
  max: number,
  min: number = 0,
): boolean {
  // 文字種チェック：数値と小数点のみ
  if (!/^\d*\.?\d*$/.test(value)) return false;

  // 桁数チェック：整数部3桁、小数部1桁まで
  const [integer, decimal] = value.split(".");
  if (integer.length > 3) return false;
  if (decimal !== undefined && decimal.length > 1) return false;

  // 範囲チェック：途中入力中（末尾が "." など）は通す
  const num = Number(value);
  if (!isNaN(num) && value !== "" && value !== ".") {
    if (num < min || num > max) return false;
  }

  return true;
}

// 年齢用：整数3桁まで、1〜120
export function isValidNumericInput(value: string): boolean {
  // 文字種チェック：整数のみ
  if (!/^\d*$/.test(value)) return false;

  // 桁数チェック：3桁まで
  if (value.length > 3) return false;

  // 範囲チェック：入力中（空文字）は通す
  const num = Number(value);
  if (value !== "" && (num < 1 || num > 120)) return false;

  return true;
}
