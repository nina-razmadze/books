import React from 'react';
import { useState } from 'react';
import BookEdit from './BookEdit';

export default function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id: any, title: any) => {
    setShowEdit(false);
    onEdit(id, title);
  };
  let content = <h3>{book.title}</h3>;
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }
  return (
    <div className='book-show'>
      <img alt='books' src={`https://picsum.photos/seed/${book.id}/300/200 `} />
      <div>{content}</div>
      <div className='actions'>
        <button className='delete' onClick={handleDeleteClick}>
          Delete
        </button>
        <button className='edit' onClick={handleEditClick}></button>
      </div>
    </div>
  );
}
