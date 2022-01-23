import axios from 'axios';
import { useRef } from 'react';

export default function SearchBooks(props) {

    const searchRef= useRef()
    const authorRef = useRef()
    const titleRef = useRef()


    function search(e){
        e.preventDefault()

        let search = searchRef.current.value;
        if(authorRef) search += "+inauthor:" + authorRef.current.value
        if(titleRef) search += "+intitle:" + titleRef.current.value

        const searchParam = {
            "q" : search
        }

        console.log(searchParam)

        axios
            .post("http://localhost:8000/google-api/", searchParam)
            .then(res => {
                console.log(res.data.items[0]);
                this.props.onSelectBooks(res.data)
            })
        return;
    }

  return <div>
      <form>
          <label>Search</label>
          <input type="text" ref={searchRef}></input><br />
          <label>Book Title</label>
          <input type="text" ref={titleRef}></input><br />
          <label>Book Author</label>
          <input type="text" ref={authorRef}></input><br />
          <button onClick={search}>Search</button>
      </form>
  </div>;
}
