import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function D3Component({ data }) {
  const d3ChartRef = useRef();

  useEffect(() => {
    if (!data || !data.labels || !data.values) return;

    const svg = d3.select(d3ChartRef.current)
      .attr("width", 400)
      .attr("height", 400)
      .style("border", "1px solid black");

    const radius = Math.min(400, 400) / 2;
    const g = svg.append("g").attr("transform", "translate(" + radius + "," + radius + ")");

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const pie = d3.pie()
      .value((d) => d.value);

    const arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius);

    const pieData = data.values.map((value, index) => ({
      value,
      label: data.labels[index],
    }));

    const arcs = g.selectAll(".arc")
      .data(pie(pieData))
      .enter().append("g")
      .attr("class", "arc");

    arcs.append("path")
      .attr("d", arc)
      .style("fill", (d) => color(d.data.label));

    arcs.append("text")
      .attr("transform", (d) => "translate(" + arc.centroid(d) + ")")
      .attr("dy", ".35em")
      .text((d) => d.data.label);

    // Clear the SVG before drawing a new chart
    return () => {
      d3.select(d3ChartRef.current).selectAll("*").remove();
    };
  }, [data]);

  return <svg ref={d3ChartRef}></svg>;
}

export default D3Component;
