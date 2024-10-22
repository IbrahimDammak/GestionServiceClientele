// src/components/NotificationsSection.jsx
import React from 'react';
import NotificationItem from './NotificationItem';

const NotificationsSection = () => {
  // Fake data for notifications
  const notifications = [
    "Client John Doe's laptop is ready for pickup.",
    "Alice Johnson's laptop has been repaired and is awaiting confirmation.",
    "New parts have arrived for Jane Smith's laptop.",
    "Bob Brown's laptop repair has been started.",
    "Charlie Black's laptop is scheduled for delivery tomorrow.",
    // Add more notifications as needed
  ];

  return (
    <div className="bg-gray-800 text-white p-4 rounded bg-opacity-40">
      <h3 className="text-xl font-bold mb-4">Notifications</h3>
      <div className="space-y-4">
        {notifications.map((notification, index) => (
          <NotificationItem key={index} message={notification} />
        ))}
      </div>
    </div>
  );
};

export default NotificationsSection;
