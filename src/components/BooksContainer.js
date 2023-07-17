import { useSelector } from 'react-redux';
import Book from './Book';

function BookContainer() {
  const { books } = useSelector((state) => state.books);

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
