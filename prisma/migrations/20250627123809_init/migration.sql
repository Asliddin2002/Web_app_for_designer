-- CreateTable
CREATE TABLE "About" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bannerImage" TEXT NOT NULL,
    "bannerTitle" TEXT NOT NULL,
    "bannerSubtitle" TEXT NOT NULL,
    "profileImage" TEXT NOT NULL,
    "aboutTitle" TEXT NOT NULL,
    "aboutDescription" TEXT NOT NULL,
    "videoUrl" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Service" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "aboutId" INTEGER NOT NULL,
    CONSTRAINT "Service_aboutId_fkey" FOREIGN KEY ("aboutId") REFERENCES "About" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Company" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "logoUrl" TEXT NOT NULL,
    "aboutId" INTEGER NOT NULL,
    CONSTRAINT "Company_aboutId_fkey" FOREIGN KEY ("aboutId") REFERENCES "About" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
