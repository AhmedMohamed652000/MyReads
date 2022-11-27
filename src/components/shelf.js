import React from 'react'
import Book from './book'

export default function shelf({category ,books,updatebook}) {
    let matchCategory= books.filter((book) => book.shelf === category )
  return (
    <div className="bookshelf">
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">{category}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid" >
                    {matchCategory.map(book=>
                    <Book key={book.id} book={book} updatebook={updatebook} />  
                    )}
                  </ol>
                </div>
              </div>
            </div>
          </div>
              </div>
  )
}
