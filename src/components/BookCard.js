import React from 'react';

export default function BookCard({ bookInfo }) {

    return (
      <div className="book-card">
          <img src={bookInfo.volumeInfo.imageLinks.thumbnail} /><br />
          <div className="same-line">
            <label>Title : </label>
            <p>{bookInfo.volumeInfo.title}</p>
          </div>
          <div className="same-line">
            <label>Author : </label>
            <p>{bookInfo.volumeInfo.authors}</p>
          </div>
      </div>
  );
}
