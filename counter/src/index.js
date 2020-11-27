import React from 'react';
import ReactDOM from 'react-dom';

const Counter = ({count, increment, decrement}) => {
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
    </div>
  )
}
const CounterApp = () => {
  const [counts, setCounts] = React.useState([0])
  console.log(counts);
  const addCounter = () => {
    const newCounts = counts.concat([0])
    setCounts(newCounts)
    console.log(counts);
  }

  const increment = (currentIndex) => {
    const newCounts = counts.map((value, index) => index === currentIndex ? value + 1 : value)
    setCounts(newCounts)
  }

  const decrement = (currentIndex) => {
    const newCounts = counts.map((value, index) => index === currentIndex ? value - 1 : value)
    setCounts(newCounts)
  }
  const deleteCounter = (obj)=>{
    console.log(obj);
     counts.pop();
     let newCounts = [...counts]
    i--;
    setCounts(newCounts);
  }
  let i=0;
  return (
    
    <div style={{textAlign: "center"}}>
      {counts.map((ele, idx) =>{
        i=idx;
     return <Counter count={ele} increment={() => increment(idx)} decrement={() => decrement(idx)}/>
       } )}
      
      <br /><br />
      <button onClick={addCounter}>Add Counter</button>
      <button id={i} onClick={()=>deleteCounter(i)}>Delete Counter</button>
    </div>
  )
}

ReactDOM.render(<CounterApp />, document.getElementById('root'))


