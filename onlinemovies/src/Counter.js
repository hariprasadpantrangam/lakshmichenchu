import React,{useState} from "react";
function Counter()
{
    const[count,setCount]=useState(0);

    const increase=()=>setCount(count+1);
    const decrease=()=>setCount(count-1);
    const reset=()=>setCount(0);
    return(
    <div>
  <h1>count:{count}</h1>
  <button onClick={increase}>+</button>
  <button onClick={decrease}>-</button>
  <button onClick={reset}>reset</button>
    </div>
    )
}
export default Counter;