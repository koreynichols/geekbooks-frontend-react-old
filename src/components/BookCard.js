import React from 'react';

export default function BookCard(bookInfo) {


    return (
      <div>
          <h2>{bookInfo.volumeInfo.title}</h2>
      </div>
  );
}
