import { Routes, Route } from "react-router-dom";
import { Layout } from ".//components/Layout.jsx";
import { Home } from "./pages/Home";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
