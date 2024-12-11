import React from "react";

const LaptopsInRepairSection = ({ count }) => {
  return (
    <div className="bg-gray-700 rounded">
      <div className="text-white p-4">
        <h3 className="text-xl font-bold">Laptops Being Repaired</h3>
        <p className="text-3xl">{count}</p>
      </div>
    </div>
  );
};

export default LaptopsInRepairSection;
