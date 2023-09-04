import "./globals.css";
import { Suspense } from "react";
import Header from "components/layout/header";
import HeaderNew from "library/molecules/Header";
import "./globals.css";
import React from "react";
import { Toaster } from "react-hot-toast";
import Footer from "library/molecules/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Toaster toastOptions={{ duration: 5000 }} />
        <Suspense fallback={<div>loading...</div>}>
          {/* Odstranit Header, až bude dořešeno přihlášení + zobrazení pro mobil */}
          {/* <Header /> */}
          <div className="flex flex-col mt-[54px]">
            <HeaderNew isBackButton={false} userLoggenIn={false} />
            {children}
            {/* TODO: Jak to bude s Footerem? Na jakých stránkách má být Footer a na jakých Navigační menu? Ad. design */}
            <Footer />
          </div>
        </Suspense>
      </body>
    </html>
  );
};

export default RootLayout;
