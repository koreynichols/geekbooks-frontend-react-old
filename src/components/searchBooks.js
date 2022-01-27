import axios from 'axios';
import { useRef } from 'react';
import './SearchBooks.css'
export default function SearchBooks({ setBookInfo }) {

    const searchRef= useRef(null)
    const authorRef = useRef(null)
    const titleRef = useRef(null)


    function search(e){
        e.preventDefault()


        let search = searchRef.current.value;
        if(authorRef.current.value) search += "+inauthor:" + authorRef.current.value
        if(titleRef.current.value) search += "+intitle:" + titleRef.current.value

        const searchParam = {
            "q" : search
        }

        console.log(searchParam)

        axios
            .post("http://localhost:8000/google-api/", searchParam)
            .then(res => {
                console.log(res.data.items[0]);
                setBookInfo(res.data.items)
            })
        return;
    }

  return (
    <div className="search-books">
        <form>
            <div>
                <label>Search : </label>
                <input type="text" ref={searchRef}></input><br />
            </div>
            <div>
                <label>Book Title : </label>
                <input type="text" ref={titleRef}></input><br />
            </div>
            <div>
                <label>Book Author : </label>
                <input type="text" ref={authorRef}></input><br />
            </div>
            <button onClick={search}>Search</button>
        </form>
    </div>
  );
}
