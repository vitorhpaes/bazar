/*
  Warnings:

  - Added the required column `endTime` to the `schedule_day` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `schedule_day` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "schedule_day_date_key";

-- AlterTable
ALTER TABLE "schedule_day" ADD COLUMN     "endTime" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL;
