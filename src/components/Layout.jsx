import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="py-10">
        <div className="container mx-auto px-2">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};
