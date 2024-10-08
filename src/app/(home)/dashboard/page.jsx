"use client";
import CustomCard from "@/components/custom-card";
import { Button } from "@/components/ui/button";
import useActivities from "@/hooks/useActivities";
import React from "react";

const Dashboard = () => {
  const activities = useActivities();
  // const banners = useBanner();

  return (
    <div className="flex h-screen items-center justify-center">
      {/* Card Dashboard Grafik / Chart */}
      <div className="grid grid-cols-3 gap-5">
        <CustomCard
          title={"Total Activities"}
          description={"Total Our Activities"}
          content={activities.length}
          footer={"Footer Pokoknya"}
        />
        <CustomCard
          title={"Total Activities"}
          description={"Total Our Activities"}
          content={activities.length}
          footer={"Footer Pokoknya"}
        />
        <CustomCard
          title={"Total Activities"}
          description={"Total Our Activities"}
          content={activities.length}
          footer={"Footer Pokoknya"}
        />
        <CustomCard
          title={"Total Activities"}
          description={"Total Our Activities"}
          content={activities.length}
          footer={"Footer Pokoknya"}
        />
        <CustomCard
          title={"Total Activities"}
          description={"Total Our Activities"}
          content={activities.length}
          footer={"Footer Pokoknya"}
        />
        <CustomCard
          title={"Total Activities"}
          description={"Total Our Activities"}
          content={activities.length}
          footer={<Button>Ini Button</Button>}
        />
      </div>
    </div>
  );
};

export default Dashboard;
