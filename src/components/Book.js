import PropTypes from 'prop-types';

function Book({ books, onDelete }) {
  return (
    <>
      { books.map((book) => (
        <div className="bookCard bg-white border-2 border-solid border-gray-200  h-40 flex my-4" key={book.id}>
          <div className="bookSection flex flex-col pt-6 pl-6  items-start">
            <div className="bookDetails flex gap-1 flex-col items-start">
              <p className="category roboto font-bold text-sm text-gray-500">{book.category}</p>
              <h3 className="title roboto font-bold text-xl">{book.title}</h3>
              <p className="author roboto text-sm font-light text-blue-500">{book.author}</p>
            </div>
            <div className="bookActions mt-5 flex items-start">
              <ul className="flex divide-x-2  divide-gray-200 items-start">
                <li className="roboto text-sm font-light text-blue-500 pr-4 hover:font-medium"><button type="button">Comment</button></li>
                <li className="roboto text-sm font-light text-blue-500 px-4 hover:font-medium"><button type="button" onClick={() => onDelete(book.id)}>Remove</button></li>
                <li className="roboto text-sm font-light text-blue-500 px-4  hover:font-medium"><button type="button">Edit</button></li>
              </ul>
            </div>
          </div>
        </div>
      ))}

    </>
  );
}

Book.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default Book;
