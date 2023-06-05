import { useState } from 'react';
import React from 'react';

export default function BookCreate({ onCreate }) {
  const [title, setTitle] = useState('');

  const handleChange = (event: any) => {
    setTitle(event.target.value);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    onCreate(title);
    setTitle('');
  };
  return (
    <div className='book-create'>
      <h3>Add A book</h3>
      <form onSubmit={handleSubmit}>
        <label>title </label>
        <input className='input' onChange={handleChange} value={title} />
        <button className='button'>Create</button>
      </form>
    </div>
  );
}
