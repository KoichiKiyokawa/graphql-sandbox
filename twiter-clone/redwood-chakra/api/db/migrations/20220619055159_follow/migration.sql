-- AlterTable
ALTER TABLE "Account" ADD COLUMN "note" TEXT;

-- CreateTable
CREATE TABLE "_AccountFollows" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_AccountFollows_A_fkey" FOREIGN KEY ("A") REFERENCES "Account" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AccountFollows_B_fkey" FOREIGN KEY ("B") REFERENCES "Account" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_AccountFollows_AB_unique" ON "_AccountFollows"("A", "B");

-- CreateIndex
CREATE INDEX "_AccountFollows_B_index" ON "_AccountFollows"("B");
