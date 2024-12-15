import { Routes, Route } from "react-router-dom";
import { Layout } from ".//components/Layout.jsx";
import { Home } from "./pages/Home";
import { NoPage } from "./pages/NoPage.jsx";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
};
