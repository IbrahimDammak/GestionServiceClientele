// src/components/NotificationItem.jsx
import React from 'react';

const NotificationItem = ({ message }) => {
  return (
    <div className="p-2 bg-gray-700 rounded bg-opacity-40">
      <p className="text-white">{message}</p>
    </div>
  );
};

export default NotificationItem;
