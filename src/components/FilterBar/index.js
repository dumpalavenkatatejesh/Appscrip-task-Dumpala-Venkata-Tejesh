import React, { useState } from "react";
import "./index.css";

const FilterBar = ({ onToggleFilter }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selected, setSelected] = useState("RECOMMENDED");
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  const options = [
    "RECOMMENDED",
    "NEWEST FIRST",
    "POPULAR",
    "PRICE : HIGH TO LOW",
    "PRICE : LOW TO HIGH",
  ];

  const handleSelect = (option) => {
    setSelected(option);
    setShowDropdown(false);
  };

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
    onToggleFilter();
  };

  return (
    <div className="filterbar">
      {/* Left side */}
      <div className="filter-left">
        <span className="item-count">3425 ITEMS</span>
        <span className="hide-filter" onClick={toggleFilter}>
          ({isFilterVisible ? "HIDE FILTER" : "SHOW FILTER"})
        </span>
      </div>

      {/* Right side */}
      <div className="filter-right">
        <div
          className="dropdown"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <span className="sort-text">{selected} ▼</span>

          {showDropdown && (
            <div className="dropdown-menu">
              {options.map((option) => (
                <div
                  key={option}
                  className={`dropdown-item ${
                    option === selected ? "active" : ""
                  }`}
                  onClick={() => handleSelect(option)}
                >
                  {option === selected && <span className="check">✔</span>}
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
