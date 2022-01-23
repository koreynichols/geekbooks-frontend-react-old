import logo from './logo.svg';
import './App.css';
import SearchBooks from './components/SearchBooks';
import BookCard from './components/BookCard';
import { useState } from "react"

function App() {

  const [bookInfo, setBookInfo] = useState()

  return (
    <div className="App">
      <SearchBooks onSelectBooks={setBookInfo} />
      {bookInfo &&
        bookInfo.map(book => {
        return(
          <BookCard bookInfo={book} />
        )
      })}
      
    </div>
  );
}

export default App;