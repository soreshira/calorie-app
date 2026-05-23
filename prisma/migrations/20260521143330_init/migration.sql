-- CreateTable
CREATE TABLE "CalorieHistory" (
    "id" TEXT NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "activity" TEXT NOT NULL,
    "tdee" INTEGER NOT NULL,
    "lean" INTEGER NOT NULL,
    "normal" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CalorieHistory_pkey" PRIMARY KEY ("id")
);
