import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import FilterSection from "../components/FilterSection";
import BreweryList from "../components/BreweryList";
import SummaryStats from "../components/SummaryStats";
import BreweryCharts from "../components/BreweryCharts";

function Dashboard() {
  const [breweries, setBreweries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterState, setFilterState] = useState("");
  const [showCharts, setShowCharts] = useState(true);

  useEffect(() => {
    const fetchBreweries = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.openbrewerydb.org/v1/breweries?per_page=100"
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

  const filteredBreweries = breweries.filter((brewery) => {
    const matchesSearch = brewery.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter = filterState === "" || brewery.state === filterState;
    return matchesSearch && matchesFilter;
  });

  const totalBreweries = filteredBreweries.length;
  const breweryTypes = [...new Set(breweries.map((b) => b.brewery_type))];
  const breweriesByState = breweries.reduce((acc, brewery) => {
    if (brewery.state) {
      acc[brewery.state] = (acc[brewery.state] || 0) + 1;
    }
    return acc;
  }, {});

  const mostPopularState =
    Object.entries(breweriesByState).length > 0
      ? Object.entries(breweriesByState).sort((a, b) => b[1] - a[1])[0]
      : ["N/A", 0];

  const stateChartData = Object.entries(breweriesByState)
    .map(([state, count]) => ({ state, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  const typeChartData = breweries.reduce((acc, brewery) => {
    if (brewery.brewery_type) {
      acc[brewery.brewery_type] = (acc[brewery.brewery_type] || 0) + 1;
    }
    return acc;
  }, {});

  const breweryTypeData = Object.entries(typeChartData).map(
    ([type, count]) => ({ type, count })
  );

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (state) => {
    setFilterState(state);
  };

  const toggleCharts = () => {
    setShowCharts(!showCharts);
  };

  return (
    <div className="dashboard">
      <SummaryStats
        totalBreweries={totalBreweries}
        breweryTypes={breweryTypes}
        mostPopularState={mostPopularState}
      />

      <div className="chart-toggle">
        <button onClick={toggleCharts}>
          {showCharts ? "Hide Charts" : "Show Charts"}
        </button>
      </div>

      {showCharts && (
        <BreweryCharts
          stateChartData={stateChartData}
          breweryTypeData={breweryTypeData}
        />
      )}

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
    </div>
  );
}

export default Dashboard;
