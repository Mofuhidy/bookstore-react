import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import { fetchBooks } from '../redux/books/booksSlice';

function BookContainer() {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <main className=" h-[50vh] overflow-auto mt-9 px-24 pb-20">
      { books.map((book) => (
        <Book
          key={book.item_id}
          books={book}
        />
      ))}
    </main>
  );
}
export default BookContainer;
