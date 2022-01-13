import React from 'react'

const Main = () => {
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
                  <h3 className="font-bold p-2 text-gray-600"><center>Contador de Clicks de JavaScript</center></h3>
                    <div>
                    <center><h3 id="counting">0</h3></center>
                    </div>
        <center>
            <div>
                <button onClick= {CountingClicks} className="border border-2 w-32 p-2 border-red-600 rounded-xl m-3 bg-red-200 hover:bg-red-400">Click Me</button>
                <button onClick={resetCounter} className="border border-2 w-32 p-2 border-red-600 rounded-xl m-3 bg-red-200 hover:bg-red-400">Reset</button>
            </div>
        </center>
    </>)

}

export default Main
