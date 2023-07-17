import { useSelector } from 'react-redux';
import Book from './Book';

function BookContainer() {
  const { books } = useSelector((state) => state.books);
  // const handeDelete = (id) => {
  //   setBook(books.filter((book) => book.id !== id));
  // };

  return (
    <main className=" h-[50vh] overflow-auto mt-9 px-24 pb-20">
      { books.map((books) => (
        <Book
          key={books.item_id}
          books={books}
        />
      ))}
    </main>
  );
}
export default BookContainer;
