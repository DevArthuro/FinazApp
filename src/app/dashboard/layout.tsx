import Header from "@/components/dashboard/header";
import Sidebar from "@/components/dashboard/sidebar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <div className="fixed md:w-64 hidden md:block">
        <Sidebar />
      </div>
      <div className="md:ml-64">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
