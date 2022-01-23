import axios from 'axios';
import { useRef } from 'react';

export default function SearchBooks() {
    const searchRef= useRef()

    function search(e){
        e.preventDefault()

        const searchParam = {
            "q" : searchRef.current.value
        }

        console.log(searchParam)

        axios
            .post("http://localhost:8000/google-api/", searchParam)
            .then(res => {
                console.log(res);
            })
        return;
    }

  return <div>
      <form>
          <label>Book Title</label>
          <input type="text" ref={searchRef}></input>
          <button onClick={search}>Search</button>
      </form>
  </div>;
}
