import React from 'react';
import ReactDom from 'react-dom';
import books from './books';

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

// Component Book
const Book = ({author, imgLink, title}) => {
  return (
    <article className='book'>
      <img src={imgLink} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
}

//Must be expression and cannot be a statement

ReactDom.render(<BookList/>,document.getElementById('root'));