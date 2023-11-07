import React, { useState } from "react";

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
    const { name, value } = e.target;
    setUpdatedBook({ ...updatedBook, [name]: value });

  };

  const handleSave = () => {
    handleUpdate(updatedBook);
    setIsUpdating(false);
    console.log(updatedBook)
  };

  return (
    <div>
      <p>Book Name: {book.name}</p>
      <p>Book Topic: {book.topic}</p>
      <button className="btn" onClick={() => setIsUpdating(true)}>
        Update
      </button>

      <button onClick={handleDelete} className="btn">
        Delete
      </button>

      <dialog
        id={`updateDialog_${book.name}`}
        className="modal"
        open={isUpdating}
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Update Book</h3>
          <input
            type="text"
            className="input input-bordered"
            name="name"
            value={updatedBook.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="input input-bordered"
            name="topic"
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
