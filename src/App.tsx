import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="home min-h-svh flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/destination" element={<h1>YOOO</h1>} />\
        <Route path="/crew" element={<h1>YOOO</h1>} />
        <Route path="/technology" element={<h1>YOOO</h1>} />
      </Routes>
    </div>
  );
}

export default App;
