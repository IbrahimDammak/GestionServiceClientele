// src/components/AddClientForm.jsx
import React from 'react';

const AddClientForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Add Client</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="client-name" className="block text-sm font-medium text-gray-700">
              Client Name
            </label>
            <input
              type="text"
              id="client-name"
              name="clientName"
              className="w-full p-2 mt-1 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="laptop-ref" className="block text-sm font-medium text-gray-700">
              Laptop Reference
            </label>
            <input
              type="text"
              id="laptop-ref"
              name="laptopRef"
              className="w-full p-2 mt-1 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
          >
            Add Client
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddClientForm;
