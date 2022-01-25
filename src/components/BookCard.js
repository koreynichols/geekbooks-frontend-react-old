import React from 'react';

export default function BookCard({ bookInfo }) {

    console.log(bookInfo)


    return (
      <div>
          <img src={bookInfo.volumeInfo.imageLinks.thumbnail} /><br />
          <label>Title : </label>
          <p>{bookInfo.volumeInfo.title}</p>
          <label>Author : </label>
          <p>{bookInfo.volumeInfo.authors}</p>
      </div>
  );
}
