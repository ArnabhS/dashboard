import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Filters from './Filter';
import BarChart from './BarChart';

function Hero() {
  const [data, setData] = useState([]);
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

  useEffect(() => {
    axios.get('http://localhost:3000/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      ...newFilters,
    }));
  };

  const filteredData = data.filter(item => {
    return (
      (!filters.endYear || item.end_year === parseInt(filters.endYear)) &&
      (!filters.topics || item.topic.includes(filters.topics)) &&
      (!filters.sector || item.sector.includes(filters.sector)) &&
      (!filters.region || item.region.includes(filters.region)) &&
      (!filters.PEST || item.PEST.includes(filters.PEST)) &&
      (!filters.source || item.source.includes(filters.source)) &&
      (!filters.SWOT || item.SWOT.includes(filters.SWOT)) &&
      (!filters.country || item.country.includes(filters.country)) &&
      (!filters.city || item.city.includes(filters.city))
    );
  });

  return (
   <div className="container  p-4 bg-gradient-to-r from-purple-400 to-pink-200 h-[550px] w-1/2 rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Data Visualization Graph</h1>
      <div className="flex flex-wrap justify-center gap-4 mb-4">
        <div className="w-full md:w-1/2 lg:w-1/3">
          {/* <Filters onFilterChange={handleFilterChange} /> */}
        </div>
        <div className="w-[100px] md:w-1/2 lg:w-2/3">
          <BarChart  data={filteredData}  maxItems={10} />
        </div>
      </div>
    </div>
  );
}

export default Hero;