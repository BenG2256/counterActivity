import { useState } from "react";

function App() {
 // const [name, setName] = useState('ben')

 // setTimeout(() => {
   // setName('charles')
 // }, 2500)

 const [counter, setCounter] = useState(0)
 const increment = () => {
    setCounter(currVal => {
        return currVal + 1

    })
 }

 const decrement = () => {
    setCounter(currVal => {
        return currVal > 0 ? currVal - 1 : 0;

    })
 }
    return (
        <div>
           <h1>header</h1>
            <h3>counter: {counter}</h3>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}

export default App;