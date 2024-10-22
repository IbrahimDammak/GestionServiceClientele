// src/pages/NotificationsPage.jsx
import React from 'react';

const NotificationsPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Notifications</h2>
      {/* Display notifications related to the repair department */}
      <div className="space-y-4">
        <div className="bg-white p-4 rounded shadow">
          <p>Notification: New parts have arrived for laptop ABC123.</p>
          <p>Date: 2024-10-20</p>
        </div>
        {/* Additional notifications can be added here */}
      </div>
    </div>
  );
};

export default NotificationsPage;
