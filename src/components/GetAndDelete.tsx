/* import React, { useState } from "react";

interface Book {
  name: string;
  topic: string;
}

interface GetAndDeleteProps {
  book: Book;
  handleDelete: () => void;
  handleUpdate: (updatedBook: Book) => void;
  books: Book[];
}

const GetAndDelete: React.FC<GetAndDeleteProps> = ({
  book,
  handleDelete,
  handleUpdate,
  books,
}) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedBook, setUpdatedBook] = useState({ ...book });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    const { name,  value } = e.target;
    setUpdatedBook({ ...updatedBook, [name]: value });
  };

  const handleSave = () => {
    handleUpdate(updatedBook);
    setIsUpdating(false);
  };


  return (
    <div>
      <p>Book Name: {book.name}</p>
      <p>Book Topic: {book.topic}</p>
      <button
        className="btn"
        onClick={() => {
          handleUpdate(updatedBook);
          setIsUpdating(true);
        }}>
        Update
      </button>

      <button onClick={handleDelete} className="btn">
        Delete
      </button>

      <dialog
        id={`updateDialog_${book.name}`}
        className="modal "
        open={isUpdating}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Update Book</h3>
          <input
            type="text"
            placeholder="name"
            className="input input-bordered"
            name="name"
            value={updatedBook.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="input input-bordered"
            name="topic"
            placeholder="topic"
            value={updatedBook.topic}
            onChange={handleInputChange}
          />
          <div className="modal-action">
            <button className="btn" onClick={() => setIsUpdating(false)}>
              Cancel
            </button>
            <button className="btn" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default GetAndDelete;
 */




import { UpdatteFprm } from "@/app/about/page";
import React, { useState } from "react";

interface Book {
  id : number;
  name: string;
  topic: string;
}

interface GetAndDeleteProps {
  book: Book;
  handleDelete: () => void;
  handleUpdate: (updatedBook: Book) => void;
  books: Book[];
  setBooks : any
}

const GetAndDelete: React.FC<GetAndDeleteProps> = ({
  book,
  handleDelete,
  handleUpdate,
  books,
  setBooks
}) => {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updatedBook, setUpdatedBook] = useState({ ...book });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
    const { name,  value } = e.target;
    setUpdatedBook({ ...updatedBook, [name]: value });
  };

  const handleSave = () => {
    handleUpdate(updatedBook);
    setIsUpdating(false);
  };


  return (
    <div>
      <p>Book Name: {book.name}</p>
      <p>Book Topic: {book.topic}</p>
      <button
        className="btn"
        onClick={() => {
          handleUpdate(updatedBook);
          setIsUpdating(true);
        }}>
        Update
      </button>

      <button onClick={handleDelete} className="btn">
        Delete
      </button>

      <dialog
        id={`updateDialog_${book.name}`}
        className="modal "
        open={isUpdating}>
        <div className="modal-box">
       
         <UpdatteFprm   setBooks = {(x : any) => setBooks(x)} books={books} instance={{ id : book.id,  name: book.name, topic: book.topic }}/>
         
          
        </div>
      </dialog>
    </div>
  );
};

export default GetAndDelete;
