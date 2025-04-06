function FilterSection({ states, onFilterChange, currentFilter }) {
  const handleChange = (e) => {
    onFilterChange(e.target.value);
  };

  return (
    <div className="filter-section">
      <label htmlFor="state-filter">Filter by State:</label>
      <select id="state-filter" value={currentFilter} onChange={handleChange}>
        <option value="">All States</option>
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterSection;
