/*
  Warnings:

  - The primary key for the `ProductOnCheckout` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `ProductOnCheckout` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProductOnCheckout" (
    "checkoutId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,

    PRIMARY KEY ("checkoutId", "productId"),
    CONSTRAINT "ProductOnCheckout_checkoutId_fkey" FOREIGN KEY ("checkoutId") REFERENCES "Checkout" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProductOnCheckout_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ProductOnCheckout" ("checkoutId", "productId") SELECT "checkoutId", "productId" FROM "ProductOnCheckout";
DROP TABLE "ProductOnCheckout";
ALTER TABLE "new_ProductOnCheckout" RENAME TO "ProductOnCheckout";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
