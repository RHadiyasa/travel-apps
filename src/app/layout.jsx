"use client";
import { Provider } from "react-redux";
import "./globals.css";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "@/store/store";
import CustomHeader from "@/components/header";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const path = usePathname();

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {path === "/login" || path === "/register" ? null : (
              <CustomHeader />
            )}
            {children}
            {/* Bisa nambahin layout juga. Jadi nested */}
            {/* Tambahin footer disini */}
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
