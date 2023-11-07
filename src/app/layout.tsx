import "./globals.css";
import { Suspense } from "react";
import Header from "components/layout/Header";
import "./globals.css";
import React from "react";
import { Toaster } from "react-hot-toast";
import MobileMenu from "components/layout/MobileMenu";
import { NextAuthProvider } from "helpers/AuthProvider";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="cs">
      <body>
        <NextAuthProvider>
          <Toaster toastOptions={{ duration: 5000 }} />
          <Suspense fallback={<div>loading...</div>}>
            <div className="flex flex-col bg-brand-light-beige">
              <Header />
              {children}
              <MobileMenu />
            </div>
          </Suspense>
        </NextAuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
