
import React from 'react';

export const BookFilter = ({ onFilterChange }) => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      <input placeholder="Категория" onChange={(e) => onFilterChange({ type: 'category', value: e.target.value })} className="input input-bordered p-2 rounded" />
      <input placeholder="Автор" onChange={(e) => onFilterChange({ type: 'author', value: e.target.value })} className="input input-bordered p-2 rounded" />
      <input placeholder="Год" onChange={(e) => onFilterChange({ type: 'year', value: e.target.value })} className="input input-bordered p-2 rounded" />
    </div>
  );
};
