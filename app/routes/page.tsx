import { Outlet } from "react-router";
import { Navbar } from "../components/navbar/navbar";
import { Footer } from "../components/footer/footer";

export default function Page() {
  return (
    <div className="font-[Montserrat] w-full h-full">
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
