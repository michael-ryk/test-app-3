import React from 'react'

// Component Book
const Book = ({author, imgLink, title}) => {

    //When button clicked - simple event
    const clickHandler = () => {
      console.log('Click Handler: button clicked');
    }
  
    //When button clicked - pass parameter
    const complexClickHandler = (e) =>{
      console.log(e);
      console.log(e.target);
    }
  
    return (
      <article className='book'>
        <img src={imgLink} alt='' />
        <h1 onClick={() => console.log("Title: " + title)}>{title}</h1>
        <h4>{author}</h4>
        <button type="button" class="btn" onClick={clickHandler}>Simple Event</button>
        <button type="button" class="btn" onClick={complexClickHandler}>Complex Event</button>
      </article>
    );
  }

export default Book