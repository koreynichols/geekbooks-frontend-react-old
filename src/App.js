import logo from './logo.svg';
import './App.css';
import SearchBooks from './components/SearchBooks';
import BookCard from './components/BookCard';
import { useState } from "react"

function App() {

  const [bookInfo, setBookInfo] = useState(null)
  console.log(bookInfo)

  return (
    <div className="App">
      <SearchBooks setBookInfo={setBookInfo} />
      {bookInfo && 
        bookInfo.map( book => <BookCard bookInfo={book} />)
      }
      
    </div>
  );
}

export default App;