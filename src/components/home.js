import React from 'react'

import { Link} from 'react-router-dom'
import Shelf from './shelf';


export default function Home({books,updatebook,Result,showResul}) {
  
const changeshelf =()=>{
  
  if(Result.length > 0) 
  {
    Result.map((bookSearch) =>
    books.forEach(book=>{
      if(bookSearch.id === book.id) 
      {
        bookSearch.shelf=book.shelf
      } 
  
      return bookSearch
    })
    )
  
  }
}
  
  return (
    <div className="list-books">
            <Shelf category='currentlyReading' books={books} updatebook={updatebook}/>
            <Shelf category='wantToRead' books={books} updatebook={updatebook} />
            <Shelf category='read' books={books}  updatebook={updatebook} />
          <div className="open-search">
            <Link onClick={changeshelf()}   to='/search' >Add a book</Link>
          </div>
          

        </div>
  )
}
