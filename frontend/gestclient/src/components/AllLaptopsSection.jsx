// src/components/AllLaptopsSection.jsx
import React from 'react';

const AllLaptopsSection = ({ laptops }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded h-full">
      <h3 className="text-xl font-bold mb-4">All Laptops</h3>
      <div className="space-y-4">
        {laptops.map((laptop) => (
          <div key={laptop.id} className="flex justify-between p-2 bg-gray-700 rounded">
            <div>
              <p>Laptop Ref: {laptop.ref}</p>
              <p>Status: {laptop.status}</p>
              <p>Description: {laptop.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllLaptopsSection;
