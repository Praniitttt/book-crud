import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookList from "./pages/BookList";
import AddBook from "./pages/AddBook";
import UpdateBook from "./pages/UpdateBook";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route to list all books */}
        <Route path="/" element={<BookList />} />
        <Route path="/books" element={<BookList />} />

        {/* Route to add a new book */}
        <Route path="/books/add" element={<AddBook />} />

        {/* Route to update a book */}
        <Route path="/books/:id" element={<UpdateBook />} />
      </Routes>
    </Router>
  );
}

export default App;
