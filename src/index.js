import React from 'react';
import ReactDom from 'react-dom';

// Import CSS
import './index.css'

// Always must return something

function BookList(){
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

//Some global props
const author = 'Amadan barbaran';

// Component Book
const Book = () => {
  //Prop inside function
  const title = 'Super book';

  return (
    <article className='book'>
      <img src='https://images-na.ssl-images-amazon.com/images/I/71bROORU%2BnL._AC_UL200_SR200,200_.jpg' alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
}

//Must be expression and cannot be a statement

ReactDom.render(<BookList/>,document.getElementById('root'));