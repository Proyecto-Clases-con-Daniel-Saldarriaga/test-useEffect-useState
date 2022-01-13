import React from 'react'

const Boton = () => {
    let counter = 0;
    let counterVal;

    function CountingClicks() {
      document.getElementById("counting").innerHTML = ++counter;
    }
    
    function ExampleWithManyStates() {
      var counterVal = 0;
    }
    
    function incrementClick() {
        updateDisplay(++counterVal);
    }
    
    function resetCounter() {
      document.getElementById("counting").innerHTML = (counter=0);
    }
    
    function updateDisplay(val) {
        document.getElementById("counter-label").innerHTML = val;
    }
    
            return (
                <>
                  <h3><center>JavaScript Click Counter</center></h3>
        <div>
            <center><h3 id="counting">0</h3></center>
        </div>
        <center>
            <div>
                <button onClick= {CountingClicks}>Click Me</button>
                <button onClick={resetCounter}>Reset</button>
            </div>
        </center>
    </>)

}

export default Boton
