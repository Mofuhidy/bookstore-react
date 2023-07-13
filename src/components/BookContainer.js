import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import Book from './Book';

function BookContainer() {
  const [books, setBook] = useState([
    {
      id: uuid(),
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'Action',
    },
    {
      id: uuid(),
      title: 'Dune',
      author: 'Frank Herbert',
      category: 'Science Fiction',
    },
    {
      id: uuid(),
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      category: 'Economy',
    },
  ]);

  const handeDelete = (id) => {
    setBook(books.filter((book) => book.id !== id));
  };
  return (
    <main className=" h-[50vh] overflow-auto mt-9 px-24 pb-20">
      <Book books={books} onDelete={handeDelete} />
    </main>
  );
}
export default BookContainer;
