import React, { useState } from "react";
import "./index.css";

const SidebarFilters = () => {
  const [openSections, setOpenSections] = useState({
    idealFor: true,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterial: false,
    pattern: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <aside className="sidebar">
      {/* Customizable */}
      <div className="filter-section">
        <label className="checkbox-label">
          <input type="checkbox" />
          <span className="label-text">CUSTOMIZABLE</span>
        </label>
      </div>

      {/* Ideal For */}
      <div className="filter-section">
        <div
          className="filter-header"
          onClick={() => toggleSection("idealFor")}
        >
          <h4>IDEAL FOR</h4>
          <span>{openSections.idealFor ? "▲" : "▼"}</span>
        </div>
        {openSections.idealFor && (
          <div className="filter-body">
            <p className="select-all">Unselect all</p>
            <label><input type="checkbox" /> Men</label>
            <label><input type="checkbox" /> Women</label>
            <label><input type="checkbox" /> Baby & Kids</label>
          </div>
        )}
      </div>

      {/* Occasion */}
      <div className="filter-section">
        <div
          className="filter-header"
          onClick={() => toggleSection("occasion")}
        >
          <h4>OCCASION</h4>
          <span>{openSections.occasion ? "▲" : "▼"}</span>
        </div>
        {openSections.occasion && (
          <div className="filter-body">
            <label><input type="checkbox" /> Casual</label>
            <label><input type="checkbox" /> Formal</label>
            <label><input type="checkbox" /> Party</label>
          </div>
        )}
      </div>

      {/* Work */}
      <div className="filter-section">
        <div className="filter-header" onClick={() => toggleSection("work")}>
          <h4>WORK</h4>
          <span>{openSections.work ? "▲" : "▼"}</span>
        </div>
        {openSections.work && (
          <div className="filter-body">
            <label><input type="checkbox" /> Embroidery</label>
            <label><input type="checkbox" /> Printed</label>
            <label><input type="checkbox" /> Handcrafted</label>
          </div>
        )}
      </div>

      {/* Fabric */}
      <div className="filter-section">
        <div className="filter-header" onClick={() => toggleSection("fabric")}>
          <h4>FABRIC</h4>
          <span>{openSections.fabric ? "▲" : "▼"}</span>
        </div>
        {openSections.fabric && (
          <div className="filter-body">
            <label><input type="checkbox" /> Cotton</label>
            <label><input type="checkbox" /> Silk</label>
            <label><input type="checkbox" /> Linen</label>
          </div>
        )}
      </div>

      {/* Segment */}
      <div className="filter-section">
        <div className="filter-header" onClick={() => toggleSection("segment")}>
          <h4>SEGMENT</h4>
          <span>{openSections.segment ? "▲" : "▼"}</span>
        </div>
        {openSections.segment && (
          <div className="filter-body">
            <label><input type="checkbox" /> Premium</label>
            <label><input type="checkbox" /> Luxury</label>
          </div>
        )}
      </div>

      {/* Suitable For */}
      <div className="filter-section">
        <div
          className="filter-header"
          onClick={() => toggleSection("suitableFor")}
        >
          <h4>SUITABLE FOR</h4>
          <span>{openSections.suitableFor ? "▲" : "▼"}</span>
        </div>
        {openSections.suitableFor && (
          <div className="filter-body">
            <label><input type="checkbox" /> Summer</label>
            <label><input type="checkbox" /> Winter</label>
            <label><input type="checkbox" /> All Seasons</label>
          </div>
        )}
      </div>

      {/* Raw Material */}
      <div className="filter-section">
        <div
          className="filter-header"
          onClick={() => toggleSection("rawMaterial")}
        >
          <h4>RAW MATERIAL</h4>
          <span>{openSections.rawMaterial ? "▲" : "▼"}</span>
        </div>
        {openSections.rawMaterial && (
          <div className="filter-body">
            <label><input type="checkbox" /> Organic Cotton</label>
            <label><input type="checkbox" /> Bamboo Fiber</label>
            <label><input type="checkbox" /> Wool</label>
          </div>
        )}
      </div>

      {/* Pattern */}
      <div className="filter-section">
        <div className="filter-header" onClick={() => toggleSection("pattern")}>
          <h4>PATTERN</h4>
          <span>{openSections.pattern ? "▲" : "▼"}</span>
        </div>
        {openSections.pattern && (
          <div className="filter-body">
            <label><input type="checkbox" /> Solid</label>
            <label><input type="checkbox" /> Striped</label>
            <label><input type="checkbox" /> Floral</label>
          </div>
        )}
      </div>
    </aside>
  );
};

export default SidebarFilters;
