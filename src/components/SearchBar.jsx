// components/SearchBar.jsx
import { useState } from "react";

function SearchBar({ onSearch }) {
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    onSearch(value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search breweries..."
        value={searchInput}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchBar;
