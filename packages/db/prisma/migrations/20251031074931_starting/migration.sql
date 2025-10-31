/*
  Warnings:

  - You are about to drop the column `access_code` on the `maps` table. All the data in the column will be lost.
  - You are about to drop the column `is_template` on the `maps` table. All the data in the column will be lost.
  - You are about to drop the column `template_id` on the `maps` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."maps" DROP CONSTRAINT "maps_template_id_fkey";

-- DropIndex
DROP INDEX "public"."maps_access_code_key";

-- AlterTable
ALTER TABLE "maps" DROP COLUMN "access_code",
DROP COLUMN "is_template",
DROP COLUMN "template_id";
