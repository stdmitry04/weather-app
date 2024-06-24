import React from 'react';

const Form = (props) => (
  <form onSubmit={props.weatherMethod} className="form">
    <input type='text' name='city' placeholder='City' />
    <button>What is the weather?</button>
  </form>
);

export default Form;
