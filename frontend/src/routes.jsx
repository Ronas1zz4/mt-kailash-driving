import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import TeenDrivers from "./pages/TeenDrivers";
import Schedule from "./pages/Schedule";
import ReservationPage from "./pages/ReservationPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/teendrivers" element={<TeenDrivers />} />
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/schedule/:class_id" element={<ReservationPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
