import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBookByAPI } from '../redux/books/booksSlice';

function Book({ books }) {
  const {
    title, author, category,
  } = books;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteBookByAPI(books.item_id));
  };

  return (
    <>
      <div className="bookCard bg-white border-2 border-solid border-gray-200  h-40 flex my-4">
        <div className="bookSection flex flex-col pt-6 pl-6  items-start">
          <div className="bookDetails flex gap-1 flex-col items-start">
            <p className="category roboto font-bold text-sm text-gray-500">{category}</p>
            <h3 className="title roboto font-bold text-xl">{title}</h3>
            <p className="author roboto text-sm font-light text-blue-500">{author}</p>
          </div>
          <div className="bookActions mt-5 flex items-start">
            <ul className="flex divide-x-2  divide-gray-200 items-start">
              <li className="roboto text-sm font-light text-blue-500 pr-4 hover:font-medium"><button type="button">Comment</button></li>
              <li className="roboto text-sm font-light text-blue-500 px-4 hover:font-medium"><button type="button" onClick={handleClick}>Remove</button></li>
              <li className="roboto text-sm font-light text-blue-500 px-4  hover:font-medium"><button type="button">Edit</button></li>
            </ul>
          </div>
        </div>
      </div>

    </>
  );
}

Book.propTypes = {
  books: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default Book;
