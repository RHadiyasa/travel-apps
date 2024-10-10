import Link from "next/link";
import React from "react";

const CustomPanel = () => {
  return (
    <div className="p-5 bg-slate-900 text-white h-auto px-10 w-1/5">
      <Link href={"/admin-panel"}>
        <div className="font-bold py-5">List of Services</div>
      </Link>
      <div className="grid gap-5 mt-5">
        <Link href="/admin-panel/users">Users</Link>
        <div>Acitivities</div>
        <div>Promotions</div>
        <div>Banners</div>
        <div>Payment</div>
      </div>
    </div>
  );
};

export default CustomPanel;
