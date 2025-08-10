import { Outlet } from "react-router-dom";
import Navigation from "./components/common/Navigation";
import Footer from "./components/common/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
