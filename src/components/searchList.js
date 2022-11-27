import React from 'react'
import "../App.css";
import {Link} from "react-router-dom";
import Book from './book'

export default function SearchList({Result,showResul,updatebook}) {



  return (
    
      <div className="search-books">
        <div className="search-books-bar">
        <Link to={'/'}
              className="close-search">
              Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
            onChange={result => showResul(result.target.value)}
              type="text"
              placeholder="Search by title, author, or ISBN"
            />
          </div>
        </div>
        <div className="list-books-content">
  
                  <ol className="books-grid" >

                        {Result.map( book =>
                          <Book key={book?.id} book={book} updatebook={updatebook}/>
                        )}
                  </ol>
              </div>
      </div>
    
  )
}
