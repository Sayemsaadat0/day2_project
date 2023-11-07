"use client";
import GetAndDelete from "@/components/GetAndDelete";
import React, { useState } from "react";

interface Book {
  name: string;
  topic: string;
}

export default function Home() {
  const [bookname, setbookName] = useState("");
  const [bookTopic, setbookTopic] = useState("");
  const [books, setBooks] = useState<Book[]>([]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newBook: Book = {
      name: bookname,
      topic: bookTopic,
    };
    setBooks([...books, newBook]);
    setbookName("");
    setbookTopic("");
  };

  const handleDelete = (index: number) => {
    const updatedBooks = [...books];
    updatedBooks.splice(index, 1);
    setBooks(updatedBooks);
  };

  const handleUpdate = (index: number, updatedBooks: Book) => {
    const updateBooks = [...books];
    updateBooks.splice(index, 1);
    setBooks(updateBooks);
  };

  return (
    <main>
      <div className="text-center">
        <h1>hello from input </h1>
        <h2>Trying to build a CRUD application</h2>
      </div>

      <div className="flex justify-center py-10">
        <div>
          <form className="flex flex-col gap-2" onSubmit={handleFormSubmit}>
            <input
              id="bookName"
              type="text"
              placeholder="book name"
              value={bookname}
              onChange={(e) => setbookName(e.target.value)}
              className="input input-bordered"
            />

            <input
              id="bookTopic"
              type="text"
              placeholder="book topic"
              value={bookTopic}
              onChange={(e) => setbookTopic(e.target.value)}
              className="input input-bordered"
            />

            <button className="btn" type="submit">
              Post
            </button>
          </form>
        </div>
      </div>

      <div className="text-center">
        <h2>Book List</h2>
        {books.map((book, index) => (
          <div key={index}>
            <GetAndDelete
              book={book}
              handleDelete={() => handleDelete(index)}
              handleUpdate={(updatedBook) => handleUpdate(index, updatedBook)}
              books={books}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
