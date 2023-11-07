import React, { useState } from "react";

interface Book {
  name: string;
  topic: string;
}

interface UpdateProps {
  book: Book;
  onUpdate: (updatedBook: Book) => void;
}

const Update: React.FC<UpdateProps> = ({ book, onUpdate }) => {
  const [newName, setNewName] = useState(book.name);
  const [newTopic, setNewTopic] = useState(book.topic);

  const handleUpdate = () => {
    const updatedBook: Book = {
      name: newName,
      topic: newTopic,
    };
    onUpdate(updatedBook);
  };

  return (
    <div>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <input
        type="text"
        value={newTopic}
        onChange={(e) => setNewTopic(e.target.value)}
      />
      <button onClick={handleUpdate} className="btn">
        Update
      </button>
    </div>
  );
};

export default Update;
