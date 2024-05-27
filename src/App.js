import './App.css';
import MetalSrednji from "./metalSrednji";
import MetalNovi from "./metalNovi";
import MetalZene from "./metalZene";
import Naslovna from "./naslovna";
import Natjecanje from "./metalNat";
import Pobjednik from "./objekt";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
        <Router>
          <Routes>
            <Route path="/" element={<Naslovna />} />
            <Route path="/srednji" element={<MetalSrednji />} />
            <Route path="/novi" element={<MetalNovi />} />
            <Route path="/zene" element={<MetalZene />} />
            <Route path="/natjecaj" element={<Natjecanje />} />
            <Route path="/pobjednik" element={<Pobjednik/>}/>
          </Routes>
        </Router>
  );
}

  export default App;
