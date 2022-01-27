import React from 'react';
import './BookCard.css';

export default function BookCard({ bookInfo }) {

    function viewbook() {
      console.log('hello')
    }

    return (
      <div className="book-card" onClick={viewbook}>
          <img src={bookInfo.volumeInfo.imageLinks.thumbnail} /><br />
          <div className="same-line">
            <label>Title : </label>
            <p>{bookInfo.volumeInfo.title}</p>
          </div>
          <div className="same-line">
            <label>Author : </label>
            {bookInfo.volumeInfo.authors && 
              bookInfo.volumeInfo.authors.map( author => <p>{author} </p> )
            }

            {/* <p>{bookInfo.volumeInfo.authors}</p> */}
          </div>
      </div>
  );
}
