import React from 'react';
import ReactDom from 'react-dom';
import books from './books';
import Book from './Book';

// Import CSS
import './index.css'

// Book list creator
function BookList(){
  return (
    <section className='booklist'>
      {books.map(item => {
        return <Book 
            key={item.id} {...item}
          />;
      })}
    </section>
  );
}

ReactDom.render(<BookList/>,document.getElementById('root'));