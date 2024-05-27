import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data, maxItems = 10 }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const width = 800;
    const height = 500;
    const margin = { top: 20, right: 30, bottom: 40, left: 90 };

    svg.attr('width', width).attr('height', height);

    // Limit the data to maxItems
    const limitedData = data.slice(0, maxItems);

    const x = d3.scaleLinear()
      .domain([0, d3.max(limitedData, d => d.intensity)])
      .range([margin.left, width - margin.right]);

    const y = d3.scaleBand()
      .domain(limitedData.map(d => d.topic))
      .range([margin.top, height - margin.bottom])
      .padding(0.1);

    const xAxis = g => g
      .attr('transform', `translate(0,${margin.top})`)
      .call(d3.axisTop(x).ticks(width / 80).tickSizeOuter(0));

    const yAxis = g => g
      .attr('transform', `translate(${margin.left},0)`)
      .call(d3.axisLeft(y).tickSizeOuter(0));

    svg.append('g').call(xAxis).selectAll('.tick text').attr('class', 'axis-label');
    svg.append('g').call(yAxis).selectAll('.tick text').attr('class', 'axis-label');

    svg.append('g')
      .selectAll('rect')
      .data(limitedData)
      .join('rect')
      .attr('x', d => x(0))
      .attr('y', d => y(d.topic))
      .attr('width', d => x(d.intensity) - x(0))
      .attr('height', y.bandwidth())
      .attr('fill', 'pink')
      .attr('class', 'bar');
  }, [data, maxItems]);

  return (
    <div className="overflow-x-auto">
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default BarChart;
