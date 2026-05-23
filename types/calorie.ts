export type Gender = "male" | "female";

export type ActivityLevel = "sedentary" | "light" | "moderate" | "active";

export type CalorieFormValues = {
  weight: string;
  height: string;
  age: string;
  gender: Gender;
  activity: ActivityLevel;
};

export type CalorieResultType = {
  tdee: number;
  lean: number;
  normal: number;
};

export type CalorieHistory = {
  id: string;
  weight: number;
  height: number;
  age: number;
  gender: string;
  activity: string;
  tdee: number;
  lean: number;
  normal: number;
  createdAt: Date;
};
