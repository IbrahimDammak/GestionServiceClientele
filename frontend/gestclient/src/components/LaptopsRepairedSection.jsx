import React from "react";

const LaptopsRepairedSection = ({ count }) => {
  return (
    <div className="bg-gray-700 text-white p-4 rounded">
      <h3 className="text-xl font-bold">Laptops Repaired</h3>
      <p className="text-3xl">{count}</p>
    </div>
  );
};

export default LaptopsRepairedSection;
