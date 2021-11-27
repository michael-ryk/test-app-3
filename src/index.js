import React from 'react';
import ReactDom from 'react-dom';

// Always must return something

function Greeting(){
  return (
    <div>
      <h1>Some Test</h1>
    </div>
    );
}

ReactDom.render(<Greeting/>,document.getElementById('root'));