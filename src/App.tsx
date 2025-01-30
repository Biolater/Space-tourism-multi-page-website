import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar/Navbar";
import Destionation from "./components/Destionation";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";
import Crew from "./components/Crew";
import Tech from "./components/Technology/Tech";

function App() {
  const ref = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  useEffect(() => {
    if (!ref.current) return;
    switch (pathname) {
      case "/":
        ref.current.classList.add("hero");
        ref.current.classList.remove("destination", "crew", "tech");
        break;
      case "/destination":
        ref.current.classList.add("destination");
        ref.current.classList.remove("hero", "crew", "tech");
        break;
      case "/crew":
        ref.current.classList.add("crew");
        ref.current.classList.remove("destination", "hero", "tech");
        break;
      case "/technology":
        ref.current.classList.add("tech");
        ref.current.classList.remove("destination", "hero", "crew");
        break;
    }
  }, [pathname, ref]);
  return (
    <div ref={ref} className="min-h-svh ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/destination" element={<Destionation />} />\
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Tech />} />
      </Routes>
    </div>
  );
}

export default App;
