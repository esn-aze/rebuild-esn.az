import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="py-10 grow">
        <div className="container mx-auto px-2">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};
