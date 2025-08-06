
import { BookStatus } from '../interfaces/Book';

export const favoriteBooks = [
  {
    id: '1',
    title: '1984',
    author: 'George Orwell',
    category: 'Dystopian',
    year: 1949,
    status: BookStatus.AVAILABLE,
    price: 10.99,
    isFavorite: true,
  },
  {
    id: '2',
    title: 'Brave New World',
    author: 'Aldous Huxley',
    category: 'Science Fiction',
    year: 1932,
    status: BookStatus.RENTED,
    price: 12.99,
    isFavorite: false,
    rentDueDate: '2025-08-30'
  }
];
