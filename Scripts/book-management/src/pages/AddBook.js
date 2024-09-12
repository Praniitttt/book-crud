import React, { useState } from "react";
import { addBook } from "../services/api";
import "./styles.css";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addBook({ title, author, description });
      setTitle("");
      setAuthor("");
      setDescription("");
      alert("Book added successfully!");
      window.location.href = "/books"; // Redirect to the list of books
    } catch (error) {
      console.error("Error adding book:", error);
      alert("Failed to add book. Please try again later.");
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1 className="heading">Add a New Book</h1>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Book Title"
            className="input"
          />
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Author Name"
            className="input"
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Book Description"
            className="input"
          />
          <button type="submit" className="submit-button add-button">
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBook;
