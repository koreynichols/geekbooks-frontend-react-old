import React from 'react';

export default function BookCard(bookInfo) {

    console.log(bookInfo.bookInfo)


    return (
      <div>
          <h2>{bookInfo.bookInfo.volumeInfo.title}</h2>
      </div>
  );
}
