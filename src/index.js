import React from 'react';
import ReactDom from 'react-dom';

// Import CSS
import './index.css'

import books from './books';
import Book from './Book';

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