
import { useState } from 'react';
import './App.css'

function App() {
  const[count,setcount]=useState(0);

 const increment=()=>{
  if(count<=19){
    // setcount(count+1);
    setcount(pervCounter=>pervCounter+1);
    setcount(pervCounter=>pervCounter+1);
    setcount(pervCounter=>pervCounter+1);
    setcount(pervCounter=>pervCounter+1);


    console.log("clicked on increment btn" , Math.random())
  }
  
 }
 const decrement= ()=>{
  if(count>=1){
    setcount(count-1);
  }
 
 }

  return (
    <div className="container">
    <h1>Count : {count}</h1>
  <button className="btn"
  onClick={increment}  
   >increment</button>
    
    <button 
    className="btn"
    onClick={decrement}
    >decrement</button>
    
    </div>
  )
}

export default App
