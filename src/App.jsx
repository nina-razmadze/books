import './App.css';
import { useState } from 'react';
import BookList from './components/BookList';
import BookCreate from './components/BookCreate';
function App() {
  const [books, setBooks] = useState([]);

  const deleteBookById = (id) => {
    const deletedBook = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(deletedBook);
  };

  const EditBookById = (id, title) => {
    const EditBook = books.map((book) => {
      if (book.id === id) {
        return { ...book, title };
      }
      return book;
    });
    setBooks(EditBook);
  };

  const createBook = (title) => {
    console.log(title);
    setBooks((prev) => [
      ...prev,
      { id: Math.round(Math.random() * 9999), title },
    ]);
  };
  return (
    <div className='app'>
      <h1>Reading list</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={EditBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
