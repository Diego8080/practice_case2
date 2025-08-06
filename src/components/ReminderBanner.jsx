
import React from 'react';

export const ReminderBanner = ({ message }) => (
  <div className="bg-yellow-100 text-yellow-800 p-4 rounded-md shadow mb-4">
    ⏰ {message}
  </div>
);
