import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { deleteBookByAPI } from '../redux/books/booksSlice';

function Book({ books }) {
  const {
    title, author, category,
  } = books;

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteBookByAPI(books.item_id));
  };

  const percentage = Math.floor(Math.random() * 100);
  const chap = Math.floor(Math.random() * 20);

  return (
    <>
      <div className="bookCard bg-white border-2 border-solid border-gray-200  h-40 flex my-4 justify-between pl-4 pr-24">
        <div className="bookSection flex flex-col pt-6 pl-6  items-start w-96">
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
        <div className="progress flex">
          <div className="prog-container flex justify-center items-center w-56">
            <div style={{ width: '4.5rem', height: '4.5rem' }}>
              <CircularProgressbar
                strokeWidth={6}
                styles={{
                  path: {
                    // Path color
                    stroke: '#379cf6',
                    strokeLinecap: 'butt',
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    transformOrigin: 'center center',
                  },
                  trail: {
                    stroke: '#d6d6d6',
                    strokeLinecap: 'butt',
                    transformOrigin: 'center center',
                  },
                }}
                value={percentage}
              />
            </div>
            <div className="progText flex flex-col ml-3">
              <span className=" w-16 h-10 text-3xl text-black">
                {percentage}
                %
              </span>
              <span className=" text-xs text-gray-500">
                completed
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center mx-6">
            <div className=" line h-16  border-solid border-[#e8e8e8] border-[1px] mx-5" />
          </div>
          <div className=" flex gap-1 items-start flex-col pt-6 pl-6 ">
            <p className="author roboto text-sm font-light  text-gray-500 uppercase">Current Chapter</p>
            <p className="author roboto text-sm font-light text-black ">
              Chapter
              {' '}
              {chap}
            </p>
            <button type="button" className=" mt-4 uppercase bg-[#0290ff] text-white w-44 h-8 rounded-[3px] roboto font-light text-sm">update progress</button>
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
