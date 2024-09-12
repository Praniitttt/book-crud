import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteBook } from "../services/api";
import "./styles.css";

const DeleteBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = async () => {
    try {
      await deleteBook(id);
      navigate("/books");
    } catch (error) {
      console.error("Failed to delete book:", error);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 className="heading">Delete Book</h2>
        <button onClick={handleDelete} className="submit-button delete-button">
          Confirm Delete
        </button>
      </div>
    </div>
  );
};

export default DeleteBook;
