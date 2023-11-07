import React from "react";

interface Book {
  name: string;
  topic: string;
}

interface GetAndDeleteProps {
  book: Book;
  handleDelete: () => void;
}

const GetAndDelete: React.FC<GetAndDeleteProps> = ({ book, handleDelete }) => {
  return (
    <div>
      <p>Book Name: {book.name}</p>
      <p>Book Topic: {book.topic}</p>
      <button onClick={handleDelete} className="btn">
        Delete
      </button>
    </div>
  );
};

export default GetAndDelete;
