"use client";

import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/store";
import Sidebar from "@/components/Layout/Sidebar";
import Header from "@/components/Layout/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-white font-customfont">
      <body className="h-full font-customfont">
        <Provider store={store}>
          <div>
            <Sidebar />
            <div className="lg:pl-72">
              <Header />
              <main className="py-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
