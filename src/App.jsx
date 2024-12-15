import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

export const App = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};
