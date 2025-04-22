import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import BreweryDetail from "./components/BreweryDetail";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Brewery Explorer</h1>
      </header>
      <div className="app-container">
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/data-dashboard-2" element={<Dashboard />} />
            <Route path="/brewery/:id" element={<BreweryDetail />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
