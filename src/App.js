import "./App.css";
import Artwork from "./components/artwork.tsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <nav>
                  <ul>
                    <li>
                      <Link to="/0">Le feu</Link>
                    </li>
                    <li>
                      <Link to="/1">Pop art mouse 2</Link>
                    </li>
                  </ul>
                </nav>
              }
            />
            <Route path="/0" element={<Artwork></Artwork>} />
            <Route path="/1" element={<Artwork></Artwork>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
