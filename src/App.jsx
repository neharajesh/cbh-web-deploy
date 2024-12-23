import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Faqs } from "./components/pages/Faqs";
import { Home } from "./components/pages/Home";
import { Contact } from "./components/pages/Contact";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
