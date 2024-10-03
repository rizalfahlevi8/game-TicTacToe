// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; 
import NotFound from './pages/NotFound';
import OnePlayer from './pages/OnePlayer';
import TwoPlayers from './pages/TwoPlayers';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/two-players" element={<TwoPlayers />} />
        <Route path="/one-player" element={<OnePlayer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
