import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SidebarFilters from "./components/SidebarFilters";
import ProductGrid from "./components/ProductGrid";
import FilterBar from "./components/FilterBar";
import Footer from "./components/Footer";
import PRODUCTS_FALLBACK from "./data/products";

export default function App() {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <div className="app-root">
      <Helmet>
        <title>Product Listing</title>
        <meta
          name="description"
          content="Responsive product listing demo built with React. SEO friendly, accessible, and ready for deployment."
        />
      </Helmet>

      {/* Top Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Filter Bar */}
      <FilterBar onToggleFilter={toggleSidebar} isSidebarVisible={showSidebar} />

      {/* Main Layout */}
      <main
        className="main-layout container"
        role="main"
        aria-labelledby="main-heading"
      >
        <h1 id="main-heading" className="sr-only">
          Product listing
        </h1>

        {/* Sidebar Filters */}
        <aside
          className={`sidebar-wrapper ${showSidebar ? "visible" : "hidden"}`}
          aria-label="Filters"
        >
          <SidebarFilters />
        </aside>

        {/* Product Grid */}
        <section className="content-wrapper">
          <ProductGrid fallbackData={PRODUCTS_FALLBACK} />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
