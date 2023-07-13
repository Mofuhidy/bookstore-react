import AddNewBook from '../components/AddNewBook';
import BookContainer from '../components/BookContainer';

function Books() {
  return (
    <main className="booksPage">
      <BookContainer />
      <AddNewBook />
    </main>
  );
}
export default Books;
