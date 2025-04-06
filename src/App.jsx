// App.jsx
import { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import FilterSection from "./components/FilterSection";
import BreweryList from "./components/BreweryList";
import SummaryStats from "./components/SummaryStats";

function App() {
  const [breweries, setBreweries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterState, setFilterState] = useState("");

  useEffect(() => {
    const fetchBreweries = async () => {
      try {
        setLoading(true);
        // Updated URL with the https:// protocol
        const response = await fetch(
          "https://api.openbrewerydb.org/v1/breweries?per_page=50"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBreweries(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchBreweries();
  }, []);

  // Filter breweries based on search term and state filter
  const filteredBreweries = breweries.filter((brewery) => {
    const matchesSearch = brewery.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter = filterState === "" || brewery.state === filterState;
    return matchesSearch && matchesFilter;
  });

  // Calculate summary statistics
  const totalBreweries = filteredBreweries.length;
  const breweryTypes = [...new Set(breweries.map((b) => b.brewery_type))];
  const breweriesByState = breweries.reduce((acc, brewery) => {
    if (brewery.state) {
      // Add check for null/undefined state
      acc[brewery.state] = (acc[brewery.state] || 0) + 1;
    }
    return acc;
  }, {});

  // Add check for empty breweriesByState object
  const mostPopularState =
    Object.entries(breweriesByState).length > 0
      ? Object.entries(breweriesByState).sort((a, b) => b[1] - a[1])[0]
      : ["N/A", 0];

  // Handlers
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (state) => {
    setFilterState(state);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Brewery Explorer</h1>
      </header>
      <main className="dashboard">
        <SummaryStats
          totalBreweries={totalBreweries}
          breweryTypes={breweryTypes}
          mostPopularState={mostPopularState}
        />
        <div className="controls">
          <SearchBar onSearch={handleSearch} />
          <FilterSection
            states={Object.keys(breweriesByState).sort()}
            onFilterChange={handleFilterChange}
            currentFilter={filterState}
          />
        </div>
        {loading ? (
          <p>Loading breweries...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <BreweryList breweries={filteredBreweries} />
        )}
      </main>
    </div>
  );
}

export default App;
