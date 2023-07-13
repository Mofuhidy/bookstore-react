function AddNewBook() {
  return (
    <>
      <div className="line mx-24 border-solid border-[1px] border-zinc-100 my-10" />
      <div className="formContainer w-full px-24 flex flex-col gap-5 mt-5">
        <h2 className=" text-xl text-gray-500 font-bold uppercase self-start">
          Add New Book
        </h2>
        <form className=" flex justify-between gap-9">
          <input type="text" name="bookName" placeholder="Book title" className=" placeholder:pl-4 placeholder:text-gray-400 w-[42rem] border-gray-100 border-solid border-2" />
          <select className="placeholder:pl-4  w-64 border-gray-100 border-solid border-2 text-gray-400 pl-4">
            <option value="author" disabled selected>Author</option>
            <option value="Jeffrey Archer">Jeffrey Archer</option>
            <option value="Harriett Gilbert">Harriett Gilbert</option>
            <option value="Stephen King">Stephen King</option>
            <option value="Dan Brown"> Dan Brown </option>
          </select>
          <button type="submit" className=" uppercase bg-[#0290ff] text-white w-48 h-11 rounded-[3px] roboto font-bold text-sm">Add book</button>
        </form>
      </div>
    </>
  );
}
export default AddNewBook;
