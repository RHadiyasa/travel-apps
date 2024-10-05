"use client";
import { Provider } from "react-redux";
import "./globals.css";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "@/store/store";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {children}
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
