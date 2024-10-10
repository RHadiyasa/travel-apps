"use client";
import CustomCard from "@/components/custom-card";
import { Button } from "@/components/ui/button";
import useActivities from "@/hooks/useActivities";
import useAllUsers from "@/hooks/useAllUsers";
import React from "react";

const Dashboard = () => {
  const activities = useActivities();
  const allUsers = useAllUsers();
  console.log(allUsers);
  // const banners = useBanner();

  return (
    <div className="flex h-screen items-center justify-center">
      {/* Card Dashboard Grafik / Chart */}
      <div className="grid grid-cols-3 gap-5">
        <CustomCard
          title={"Users"}
          description={"Total Our Users"}
          content={allUsers.length}
          footer={<Button>Action</Button>}
        />
        <CustomCard
          title={"Total Activities"}
          description={"Total Our Activities"}
          content={activities.length}
          footer={<Button>Action</Button>}
        />
        <CustomCard
          title={"Total Activities"}
          description={"Total Our Activities"}
          content={activities.length}
          footer={<Button>Action</Button>}
        />
        <CustomCard
          title={"Total Activities"}
          description={"Total Our Activities"}
          content={activities.length}
          footer={<Button>Action</Button>}
        />
        <CustomCard
          title={"Total Activities"}
          description={"Total Our Activities"}
          content={activities.length}
          footer={<Button>Action</Button>}
        />
        <CustomCard
          title={"Total Activities"}
          description={"Total Our Activities"}
          content={activities.length}
          footer={<Button>Action</Button>}
        />
      </div>
    </div>
  );
};

export default Dashboard;
