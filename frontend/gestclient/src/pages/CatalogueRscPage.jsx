import React, { useState, useEffect } from "react";
import { getAllParts, savePart, deletePart } from "../service/CatalogueServicePage";
import Sidebar from "../components/Sidebar";

const CataloguePage = () => {
  const [parts, setParts] = useState([]); 
  const [searchQuery, setSearchQuery] = useState("");
  const [filterBrand, setFilterBrand] = useState("");
  const [filterPrice, setFilterPrice] = useState("");
  const [currentPart, setCurrentPart] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Fetch parts data from API using axios service
  useEffect(() => {
    getAllParts()
      .then((response) => {
        setParts(response.data);
        console.log(response.data) // Set parts data to state
      })
      .catch((error) => {
        console.error("There was an error fetching the parts!", error);
      });
  }, []);

  const handleSearch = (e) => setSearchQuery(e.target.value);

  const handleFilterBrand = (e) => setFilterBrand(e.target.value);

  const filteredParts = Array.isArray(parts) ? parts.filter(
    (part) =>
      part.nom.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterBrand === "" || part.brand === filterBrand) &&
      (filterPrice === "" || part.price <= parseFloat(filterPrice))
  ) : [];

  const handleAddOrEdit = (e) => {
    e.preventDefault();

    const partData = {
      ...currentPart,
      price: parseFloat(currentPart.prixTTC),
      hourlyRate: parseFloat(currentPart.typePiece.tarifH),
    };

    if (currentPart?.id) {
      // Update part
      savePart(currentPart.id, partData)
        .then((response) => {
          setParts(parts.map((part) => (part.id === currentPart.id ? response.data : part)));
          setShowForm(false);
          setCurrentPart(null);
        })
        .catch((error) => {
          console.error("There was an error updating the part!", error);
        });
    } else {
      // Add new part
     savePart(partData)
        .then((response) => {
          setParts([...parts, response.data]);
          setShowForm(false);
          setCurrentPart(null);
        })
        .catch((error) => {
          console.error("There was an error adding the part!", error);
        });
    }
  };

  const handleDelete = (id) => {
    deletePart(id)
      .then(() => {
        setParts(parts.filter((part) => part.id !== id));
      })
      .catch((error) => {
        console.error("There was an error deleting the part!", error);
      });
  };

  return (
    <div className="flex bg-gray-800 min-h-screen">
      {/* Sidebar */}
      <div className="flex h-screen w-64">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="p-6 flex-grow">
        <h2 className="text-2xl font-bold text-white mb-6">Catalogue</h2>

        {/* Search and Filter */}
        <div className="flex space-x-4 mb-6">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={handleSearch}
            className="p-2 rounded border bg-white text-black"
          />
          <input
            type="number"
            placeholder="Max price..."
            value={filterPrice}
            onChange={(e) => setFilterPrice(e.target.value)}
            className="p-2 rounded border bg-white text-black"
          />
          <select
            value={filterBrand}
            onChange={handleFilterBrand}
            className="p-2 rounded border bg-white text-black"
          >
            <option value="">All Brands</option>
            <option value="Samsung">Samsung</option>
            <option value="Corsair">Corsair</option>
            {/* Add more brands here */}
          </select>
          <button
            onClick={() => {
              setShowForm(true);
              setCurrentPart(null);
            }}
            className="bg-green-600 text-white p-2 rounded"
          >
            Add Part
          </button>
        </div>

        {/* Parts List */}
        <div className="grid grid-cols-3 gap-4">
          {filteredParts.map((part) => (
            <div
              key={part.id}
              className="bg-white p-4 rounded shadow text-black"
            >
              <h3 className="font-bold">{part.nom}</h3>
              <p>type Piece: {part.typePiece.type}</p>
              <p>Price: {part.prixTTC} DT</p>
              <p>Hourly Rate: {part.typePiece.tarifH} DT</p>
              <div className="flex space-x-2 mt-4">
                <button
                  onClick={() => {
                    setShowForm(true);
                    setCurrentPart(part);
                  }}
                  className="bg-blue-600 text-white p-2 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(part.id)}
                  className="bg-red-600 text-white p-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add/Edit Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-1/2">
            <h3 className="text-xl font-bold mb-4">
              {currentPart ? "Edit Part" : "Add Part"}
            </h3>
            <form onSubmit={handleAddOrEdit}>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Name</label>
                <input
                  type="text"
                  value={currentPart?.name || ""}
                  onChange={(e) =>
                    setCurrentPart({ ...currentPart, name: e.target.value })
                  }
                  className="p-2 border rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Brand</label>
                <input
                  type="text"
                  value={currentPart?.brand || ""}
                  onChange={(e) =>
                    setCurrentPart({ ...currentPart, brand: e.target.value })
                  }
                  className="p-2 border rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Price</label>
                <input
                  type="number"
                  value={currentPart?.price || ""}
                  onChange={(e) =>
                    setCurrentPart({ ...currentPart, price: e.target.value })
                  }
                  className="p-2 border rounded w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Hourly Rate</label>
                <input
                  type="number"
                  value={currentPart?.hourlyRate || ""}
                  onChange={(e) =>
                    setCurrentPart({ ...currentPart, hourlyRate: e.target.value })
                  }
                  className="p-2 border rounded w-full"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="bg-red-600 text-white p-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white p-2 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CataloguePage;
