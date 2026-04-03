import React, { useState, useMemo } from "react";

const FruitFilter = () => {
  const [query, setQuery] = useState("");

  const fruits = ["Apple", "Orange", "Grapes", "Pineapple"];

  // useMemo ensures filtering only recalculates when query or fruits change
  const filteredFruits = useMemo(() => {
    console.log("calculation happend");
    return fruits.filter((fruit) =>
      fruit.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, fruits]);

  return (
    <div style={{ fontFamily: "sans-serif", padding: "1rem" }}>
      <h2>Fruit Filter</h2>
      <input
        type="text"
        placeholder="Search fruits..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "0.5rem", marginBottom: "1rem" }}
      />
      <ul>
        {filteredFruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default FruitFilter;