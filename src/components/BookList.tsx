import React, { PropsWithChildren } from 'react';
import BookShow from './BookShow';

export default function BookList({ books, onDelete, onEdit }) {
  const renderedBooks = books.map((book: any) => {
    return (
      <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
    );
  });
  return <div className='book-list'>{renderedBooks}</div>;
}
