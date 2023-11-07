"use client";
import GetAndDelete from "@/components/GetAndDelete";
import React, { useState } from "react";

interface Book {
  name: string;
  topic: string;
}

export const UpdatteFprm = ({
  instance,
  books,
  setBooks,
}: {
  instance?: any;
  books: any;
  setBooks: any;
}) => {
  const [bookname, setbookName] = useState(instance?.name || "");
  const [bookTopic, setbookTopic] = useState(instance?.topic || "");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let newBOoks = { name: bookname, topic: bookTopic };

    // console.log(newBOoks);
    console.log(books); 
    // 🤐 console.log(modify)

    // set book as []
    // const emptyBook = [...books];

    const updatedData = { name : newBOoks.name, topic : newBOoks.topic }

    setBooks();

    // console.log(books);
  };
  return (
    <>
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
    </>
  );
};

export default function Home() {
  return (
    <main>
      {/* <UpdatteFprm  instance={{ name: "Al", topic: "WWW" }} /> */}
    </main>
  );
}
