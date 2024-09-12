import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBookById, updateBook } from "../services/api";
import "./styles.css";

const UpdateBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState({ title: "", author: "", description: "" });

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await getBookById(id);
        setBook(response.data);
      } catch (error) {
        console.error("Error fetching book:", error);
      }
    };
    fetchBook();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateBook(id, book);
      alert("Book updated successfully!");
      navigate("/books");
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="heading">Update Book</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            value={book.title}
            onChange={(e) => setBook({ ...book, title: e.target.value })}
            placeholder="Book Title"
            className="input"
          />
          <input
            type="text"
            value={book.author}
            onChange={(e) => setBook({ ...book, author: e.target.value })}
            placeholder="Author Name"
            className="input"
          />
          <input
            type="text"
            value={book.description}
            onChange={(e) => setBook({ ...book, description: e.target.value })}
            placeholder="Book Description"
            className="input"
          />
          <button type="submit" className="submit-button update-button">
            Update Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBook;
