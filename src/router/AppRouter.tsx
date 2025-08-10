import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Landing from "../pages/Landing";
import About from "../pages/About";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Landing />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
