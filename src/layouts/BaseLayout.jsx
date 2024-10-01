import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const BaseLayout = () => {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col text-stone-900">
      <Navbar />
      <div className="flex-grow flex justify-center items-center overflow-hidden">
          <Outlet />
      </div>
    </div>
  )
}

export default BaseLayout;