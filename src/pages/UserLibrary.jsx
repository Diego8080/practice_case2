
import React, { useState } from 'react';
import { favoriteBooks } from '../data/favoriteBooks';
import { BookCard } from '../components/BookCard';
import { BookFilter } from '../components/BookFilter';
import { ReminderBanner } from '../components/ReminderBanner';

export const UserLibrary = () => {
  const [books, setBooks] = useState(favoriteBooks);

  const handleFilterChange = ({ type, value }) => {
    const filtered = favoriteBooks.filter((book) => {
      return value === '' || book[type].toString().toLowerCase().includes(value.toLowerCase());
    });
    setBooks(filtered);
  };

  const now = new Date();
  const reminders = favoriteBooks
    .filter(b => b.rentDueDate && new Date(b.rentDueDate) <= new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000))
    .map(b => `Аренда книги "${b.title}" заканчивается ${b.rentDueDate}`);

  return (
    <div className="p-4">
      {reminders.map((msg, idx) => <ReminderBanner key={idx} message={msg} />)}
      <BookFilter onFilterChange={handleFilterChange} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};
