import "./App.css";
import React from "react";
import { BarChart, Bar, YAxis, CartesianGrid, Tooltip, Cell } from "recharts";

const data = [
  { name: "A", value: 82 },
  { name: "B", value: 13 },
  { name: "C", value: 17 },
  { name: "D", value: 10 },
  { name: "E", value: 15 },
  { name: "F", value: 22 },
];

const colors = ["#f4d3f4", "#905a5a", "#8e8e9b", "#365785", "#6b5794", "#ffff"]; // Bar colors

const App = () => {
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <BarChart
        width={400}
        height={300}
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        {/* Grid */}
        <CartesianGrid
          vertical={false} // Horizontal lines only
          stroke="rgba(255, 255, 255, 0.1)" // Subtle grid color
        />
        {/* Y Axis on the Right */}
        <YAxis
          tick={{
            fill: "#f1fddb", // White tick color for Y-axis
            fontSize: 12,
          }}
          ticks={[0, 20,40, 60, 80, 100]}
          axisLine={{ stroke: "rgba(255, 255, 255, 0.2)" }}
          tickLine={false} // Disable tick lines
          width={40} // Width for Y-axis
          orientation="right" // Move Y-axis to the right
        />
        {/* Tooltip */}
        <Tooltip
          cursor={{ fill: "rgba(255, 255, 255, 0.1)" }} // Hover effect
          contentStyle={{
            backgroundColor: "#222", // Tooltip background
            border: "none",
            borderRadius: "5px",
            color: "#fff",
          }}
        />
        {/* Bars */}
        <Bar
          dataKey="value"
          barSize={50}
          radius={[5, 5, 0, 0]}
          isAnimationActive={true} // Enable animation
          animationDuration={1000} // Animation duration (in ms)
          animationEasing="ease-in-out"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default App;
