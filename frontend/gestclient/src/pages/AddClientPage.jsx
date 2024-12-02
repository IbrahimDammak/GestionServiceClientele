// src/pages/AddClientPage.jsx
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const AddClientPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    clientId: '',
    faultDescription: '',
    serialNumber: '',
  });

  const [error, setError] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddClient = () => {
    // Form validation
    if (!formData.firstName || !formData.lastName || !formData.phoneNumber ||
        !formData.clientId || formData.clientId.length !== 8 ||
        !formData.faultDescription || !formData.serialNumber) {
      setError('Please fill all fields correctly. Make sure Client ID is exactly 8 digits.');
      setIsPopupVisible(true);
      return;
    }

    // If the form is valid, handle the form submission logic here
    console.log('Client Added:', formData);
    setError('');
    setIsPopupVisible(false);
  };

  const handleCancel = () => {
    // Reset form or navigate back
    setFormData({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      clientId: '',
      faultDescription: '',
      serialNumber: '',
    });
    setError('');
    setIsPopupVisible(false);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="flex h-screen bg-gray-800">
      <Sidebar />
      <div className="flex-grow p-6 w-full pt-20">
        <div className="max-w-2xl mx-auto bg-gray-800 p-6 rounded shadow-lg text-white">
          <h2 className="text-2xl font-bold mb-6">Add Client</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 text-black rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 text-black rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 text-black rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Client ID (8 digits)</label>
              <input
                type="text"
                name="clientId"
                value={formData.clientId}
                onChange={handleChange}
                className="w-full px-4 py-2 text-black rounded"
                required
                pattern="\d{8}"
                title="Client ID must be exactly 8 digits"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Fault Description</label>
              <textarea
                name="faultDescription"
                value={formData.faultDescription}
                onChange={handleChange}
                className="w-full px-4 py-2 text-black rounded"
                rows="3"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Serial Number</label>
              <input
                type="text"
                name="serialNumber"
                value={formData.serialNumber}
                onChange={handleChange}
                className="w-full px-4 py-2 text-black rounded"
                required
              />
            </div>
            <div className="flex space-x-4 mt-6">
              <button
                type="button"
                onClick={handleAddClient}
                className="px-4 py-2 bg-green-600 rounded hover:bg-green-500"
              >
                Add Client
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 bg-red-600 rounded hover:bg-red-500"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>

        {/* Popup for form errors */}
        {isPopupVisible && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-gray-800 p-6 rounded shadow-lg text-white">
              <h3 className="text-xl font-bold mb-4">Error</h3>
              <p>{error}</p>
              <button
                onClick={closePopup}
                className="mt-4 px-4 py-2 bg-red-600 rounded hover:bg-red-500"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddClientPage;
