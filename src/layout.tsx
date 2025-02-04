import { Outlet } from "react-router-dom";
import { useEffect } from "react";

import TopBar from "@/components/Topbar";
import Navbar from "@/components/Navbar";

export default function Layout() {
  useEffect(() => {
    const loadProjects = async () => {
      await fetch("https://invoiceapp-wmzc.onrender.com");
    };

    loadProjects();
  }, []);

  return (
    <main className="relative mx-auto min-h-screen scroll-smooth p-6 lg:max-w-5xl">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="relative z-20">
        <TopBar />
      </div>
      <div className="relative z-10 w-full">
        <Outlet />
      </div>
      <div className="relative z-20">
        <Navbar />
      </div>
    </main>
  );
}
