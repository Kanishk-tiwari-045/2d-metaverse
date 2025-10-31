/*
  Warnings:

  - A unique constraint covering the columns `[access_code]` on the table `maps` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "maps" ADD COLUMN     "access_code" TEXT,
ADD COLUMN     "is_template" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "template_id" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "maps_access_code_key" ON "maps"("access_code");

-- AddForeignKey
ALTER TABLE "maps" ADD CONSTRAINT "maps_template_id_fkey" FOREIGN KEY ("template_id") REFERENCES "maps"("id") ON DELETE SET NULL ON UPDATE CASCADE;
