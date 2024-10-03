-- CreateTable
CREATE TABLE "notif" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "notif_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "notif" ADD CONSTRAINT "notif_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
