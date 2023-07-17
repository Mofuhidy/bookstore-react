import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

function AddNewBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookToSubmit = {
      item_id: uuidv4(),
      title,
      author,
      category: 'Sport',
    };
    dispatch(addBook(bookToSubmit));
    setTitle('');
    setAuthor('');
  };

  return (
    <>
      <div className="line mx-24 border-solid border-[1px] border-zinc-100 my-10" />
      <div className="formContainer w-full px-24 flex flex-col gap-5 mt-5">
        <h2 className=" text-xl text-gray-500 font-bold uppercase self-start">
          Add New Book
        </h2>
        <form className=" flex justify-between gap-9">
          <input
            type="text"
            name="bookName"
            placeholder="Book title"
            className=" placeholder:pl-4 placeholder:text-gray-400 w-[42rem] border-gray-100 border-solid border-2 pl-4"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <input
            type="text"
            name="bookAuthor"
            placeholder="Author name"
            className=" w-64 placeholder:pl-4 placeholder:text-gray-400 border-gray-100 border-solid border-2 pl-4"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
          />
          <button type="submit" className=" uppercase bg-[#0290ff] text-white w-48 h-11 rounded-[3px] roboto font-bold text-sm" onClick={handleSubmit}>Add book</button>
        </form>
      </div>
    </>
  );
}
export default AddNewBook;
