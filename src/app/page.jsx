"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    // Ini akan menjadi welcome page
    <div className="flex h-screen w-screen items-center justify-center">
      <div>
        <h1 className="text-9xl font-extrabold text-center mb-4">R2SH</h1>
        <div className="flex gap-3 items-center justify-center"></div>
      </div>
    </div>
  );
}
