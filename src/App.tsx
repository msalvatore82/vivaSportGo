import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/home/Home";
import TournamentDetail from "./views/tournament/TournamentDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tournament/:tournamentSlug" element={<TournamentDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
