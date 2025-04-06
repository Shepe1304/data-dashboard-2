function SummaryStats({ totalBreweries, breweryTypes, mostPopularState }) {
  return (
    <div className="summary-stats">
      <div className="stat-card">
        <h3>Total Breweries</h3>
        <p className="stat-value">{totalBreweries}</p>
      </div>
      <div className="stat-card">
        <h3>Brewery Types</h3>
        <p className="stat-value">{breweryTypes.length}</p>
        <p className="stat-detail">{breweryTypes.join(", ")}</p>
      </div>
      <div className="stat-card">
        <h3>Most Popular State</h3>
        <p className="stat-value">
          {mostPopularState
            ? `${mostPopularState[0]} (${mostPopularState[1]})`
            : "Loading..."}
        </p>
      </div>
    </div>
  );
}

export default SummaryStats;
