import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TelPages from "./pages/TelPages";
import CodePages from "./pages/CodePages";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<TelPages />} />
        <Route path="/code" element={<CodePages />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
