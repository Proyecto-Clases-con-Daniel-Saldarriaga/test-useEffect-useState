import React, { useState } from 'react';

function ExampleWithManyStates() {
  // Declare multiple state variables!
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

  function handleOrangeClick(fruit) {
    // Similar to this.setState({ fruit: 'orange' })
    setFruit('orange');
  }

  const enviarDatos =()=>{
    console.log("el nombre de la fruta es: ", fruit)
    }

  return (
        <div>
          <p>You clicked {fruit} times</p>
          <input type="text" onChange={(e)=>{setFruit(e.target.value)}}></input>
          <button onClick={enviarDatos}>
           Click me
          </button>
        </div>
      );

}



export default ExampleWithManyStates;