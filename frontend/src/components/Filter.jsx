import React, { useState } from 'react';

const Filters = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    endYear: '',
    topics: '',
    sector: '',
    region: '',
    PEST: '',
    source: '',
    SWOT: '',
    country: '',
    city: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
    onFilterChange({ [name]: value });
  };

  return (
    <div className="flex flex-col justify-center items-center md:grid-cols-2 lg:grid-cols-4 gap-2 mb-4">
      {Object.keys(filters).map((filterKey) => (
        <label key={filterKey} className="block text-sm text-black">
          {filterKey.charAt(0).toUpperCase() + filterKey.slice(1)}:
          <input
            type="text"
            name={filterKey}
            value={filters[filterKey]}
            onChange={handleChange}
            className=" block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-sm"
          />
        </label>
      ))}
    </div>
  );
};

export default Filters;
