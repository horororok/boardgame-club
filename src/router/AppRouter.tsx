import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Landing from "../pages/Landing";
import About from "../pages/About";
import ScrollToTop from "../components/common/ScrollToTop";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<App />}>
          <Route index element={<Landing />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
