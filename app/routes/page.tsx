import { Outlet } from "react-router";
import { Navbar } from "../components/Navbar";

export default function Page() {
  return (
    <div className="font-[Montserrat] w-full h-full">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
