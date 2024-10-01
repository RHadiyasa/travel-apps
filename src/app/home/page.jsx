import { Button } from "@/components/ui/button";
import React from "react";

const HomePage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="grid">
        <div>Home Page</div>
        <Button>Logout</Button>
      </div>
    </div>
  );
};

export default HomePage;
