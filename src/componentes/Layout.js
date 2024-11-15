import { Outlet } from "react-router-dom";
import SideBar from "../componentes/Sidebar";

export default function Layout() {
  return (
    <div className="min-h-screen w-full bg-slate-100">
      <div className="lg:mt-6 lg:grid lg:grid-rows-[auto_1fr_auto] lg:grid-cols-[100px_1fr_1fr_100px]">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
}
