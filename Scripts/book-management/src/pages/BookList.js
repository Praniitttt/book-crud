import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBooks, deleteBook } from "../services/api";
import "./styles.css";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  // Fetch books from API
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await getBooks();
        setBooks(response.data);
        setError(null);
      } catch (error) {
        console.error("Error fetching books:", error);
        setError("Failed to fetch books. Please try again later.");
      }
    };
    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteBook(id);
      setBooks(books.filter((book) => book.id !== id));
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Book List</h1>

      <Link to="/books/add" className="add-book-link">
        Add Book
      </Link>

      {error && <p className="error-message">{error}</p>}

      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th className="th">ID</th>
              <th className="th">Title</th>
              <th className="th">Author</th>
              <th className="th">Description</th>
              <th className="th">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id}>
                <td className="th-td">{book.id}</td>
                <td className="th-td">{book.title}</td>
                <td className="th-td">{book.author}</td>
                <td className="th-td">{book.description}</td>
                <td className="th-td">
                  <div className="action-buttons">
                    <Link
                      to={`/books/${book.id}`}
                      className="button edit-button"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(book.id)}
                      className="button delete-button"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookList;
