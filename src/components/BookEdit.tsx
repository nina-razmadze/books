import React from 'react';
import { useState } from 'react';

export default function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);

  const handlechange = (event: any) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    onSubmit(book.id, title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label></label>
      <img alt='books' src='https://picsum.photos/200/300' />

      <input className='input' onChange={handlechange} value={title} />
      <button className='button is-primary'>Save</button>
    </form>
  );
}
