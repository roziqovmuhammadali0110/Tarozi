import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TelPages from "./pages/TelPages";
import CodePages from "./pages/CodePages";

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Routes>
        <Route path="/" element={<TelPages />} />
        <Route path="/code" element={<CodePages />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </I18nextProvider>
  );
}

export default App;
