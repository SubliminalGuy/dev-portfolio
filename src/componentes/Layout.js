import { Outlet } from "react-router-dom";
import SideBar from "../componentes/Sidebar";

export default function Layout() {
  return (
    <div className="main-container">
      <Outlet />
      <SideBar />
    </div>
  );
}
