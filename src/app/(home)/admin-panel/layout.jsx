"use client";
import CustomPanel from "@/components/custom-panel";

export default function AdminPanelLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <div className="p-10 px-10 lg:px-20">
        <h1 className="text-xl font-bold">Welcome Admin</h1>
        <div className="flex mt-5 gap-5">
          <CustomPanel />
          <div className="bg-slate-200 w-full p-10">{children}</div>
        </div>
      </div>
    </section>
  );
}
