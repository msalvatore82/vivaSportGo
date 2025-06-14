import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/home/Home";
import ServiceDetail from "./views/services/ServiceDetail";
import ServicesView from "./views/services/ServicesView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesView />} />
        <Route path="/services/:serviceKey" element={<ServiceDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
