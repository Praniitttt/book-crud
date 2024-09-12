
# Book CRUD Application

## Overview

This project is a Full Stack CRUD application for managing a list of books. It utilizes FastAPI for the backend and React for the frontend, with SQLite as the database.

## Tech Stack

-Backend: FastAPI
- Frontend: React
- **Database:** SQLite (with potential for MySQL or PostgreSQL)

## Features

- **Backend:**
  - RESTful API with endpoints to Create, Read, Update, and Delete books.
  - Uses SQLAlchemy for ORM.
  
- **Frontend:**
  - Pages to list all books, add a new book, update an existing book, and delete a book.
  - Axios for API calls.

## Backend Setup

1. **Clone the repository:**

   ```sh
   git clone <repository-url>
   cd book-crud-app
   ```

2. **Set up the Python virtual environment:**

   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

3. **Install the required packages:**

   ```sh
   pip install fastapi uvicorn sqlalchemy sqlite
   ```

4. **Run the FastAPI server:**

   ```sh
   uvicorn main:app --reload
   ```

   The API will be available at `http://localhost:8000`.

## Frontend Setup

1. **Navigate to the `client` directory:**

   ```sh
   cd client
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Run the React development server:**

   ```sh
   npm start
   ```

   The application will be available at `http://localhost:3000`.

## Endpoints

- **GET /books** - Retrieve a list of books.
- **POST /books** - Add a new book.
- **GET /books/{id}** - Retrieve a specific book by ID.
- **PUT /books/{id}** - Update a specific book by ID.
- **DELETE /books/{id}** - Delete a specific book by ID.

## Folder Structure

- `main.py` - FastAPI backend code.
- `client/` - React frontend application.
  - `src/BookList.js` - Component for listing books.
  - `src/AddBook.js` - Component for adding a new book.
  - `src/UpdateBook.js` - Component for updating an existing book.
  - `src/DeleteBook.js` - Component for deleting a book.
  - `src/App.js` - Main React application entry point.

## Additional Notes

- Ensure both the backend and frontend servers are running simultaneously for full functionality.
- Update the API base URL in the React components if your FastAPI server is hosted on a different port or domain.

## License

This project is licensed under the MIT License.
```

Feel free to customize any parts of the README to better fit your project specifics or preferences!