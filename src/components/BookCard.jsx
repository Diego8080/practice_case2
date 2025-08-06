
import React from 'react';

export const BookCard = ({ book }) => {
  return (
    <div className="border rounded-2xl shadow-lg p-4 hover:shadow-xl bg-white">
      <h2 className="text-xl font-bold">{book.title}</h2>
      <p className="text-sm">{book.author} ({book.year})</p>
      <p className="text-sm text-gray-500">Категория: {book.category}</p>
      <p className="mt-2 text-green-600 font-semibold">Цена: ${book.price}</p>
      <div className="mt-4 flex gap-2">
        <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Купить</button>
        <button className="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600">Аренда</button>
      </div>
    </div>
  );
};
