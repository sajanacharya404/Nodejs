import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../utils/Loader";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  // we cant use async await inside useeffect
  useEffect(() => {
    getAllBooks();
  }, []);

  const getAllBooks = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:8000/api/v1/allbooks");
      const books = await res.data;
      setBooks(books);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      {books.map((book) => (
        <div key={book._id}>{book.title}</div>
      ))}
    </div>
  );
};

export default HomePage;
