import "./globals.css";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import Header from "components/layout/header";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={<div>loading...</div>}>
          <Header />
          {children}
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
