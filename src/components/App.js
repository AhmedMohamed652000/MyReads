import "../App.css";
import {Routes,Route} from "react-router-dom";
import Home from "./home";
import SearchList from "./searchList";
import {useState } from 'react'
import * as BooksAPI from  '../BooksAPI'

function App() {

  const [update , updateBooks] = useState([])

  const updatebook = async (book, event)=>{
    const res = await BooksAPI.update(book,event.target.value);
    updateBooks(res)
  }

  const [books , gettAll] = useState([])

  const getAllFun = async ()=>{
    const res = await BooksAPI.getAll();
    gettAll(res)
  }
  getAllFun()




  const [Result , setResult]= useState([])

  const showResul =  async (query)=>{
    const resultsearch = await BooksAPI.search(query,9)
    if (resultsearch.length > 0 )
    {
      resultsearch.map((bookSearch) =>
        books.forEach(book=>{
          if(bookSearch.id === book.id) 
          {
            bookSearch.shelf=book.shelf
          }
          else if(bookSearch.id !== book.id) 
          {
            bookSearch.shelf=book.shelf='none'
          }
   

          return resultsearch
        })
        )
        setResult(resultsearch)
    }
    else{
      setResult([])

    }

  }




  return (
    <Routes>
      <Route path='/' element={<Home updatebook={updatebook} books={books} Result={Result} showResul={showResul}/>} />
      <Route path='search' element={<SearchList Mybooks={books} updatebook={updatebook} Result={Result} showResul={showResul} />} />

    </Routes>

  
  );
}

export default App;
