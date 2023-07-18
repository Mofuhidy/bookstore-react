import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import { fetchBooks } from '../redux/books/booksSlice';

function BookContainer() {
  const { books, error, loading } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  if (loading === 'pending') {
    return (
      <>
        <main className=" h-[50vh] overflow-auto mt-9 px-24 pb-20">
          <h3>Loading...</h3>
        </main>
      </>
    );
  }
  if (error) {
    return (
      <>
        <main className=" h-[50vh] overflow-auto mt-9 px-24 pb-20">
          <h3>{error}</h3>
        </main>
      </>
    );
  }

  return (
    <main className=" h-[50vh] overflow-auto mt-9 px-24 pb-20">
      { books.map((book) => (
        <Book
          key={uuidv4()}
          books={book}
        />
      ))}
    </main>
  );
}
export default BookContainer;
