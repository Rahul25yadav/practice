import React, { useState } from 'react'

 function Counter() {
    const [countValue,setCountValue]=useState(0);

    function Increment(){
       setCountValue(countValue+1)
    }
    function Decrement(){
        setCountValue(countValue-1);
     }
  return (
    <div className='main'>
      <h1>Counter Button</h1>
      <div className='a'>
        <button>Change</button>
      </div>
      <div className='b'>
        <button onClick={Increment}>Increment</button>
      </div>
      <h1>{countValue}</h1>
      <div className='c'>
        <button onClick={Decrement}>Decrement</button>
      </div>
    </div>
  )
}
export default Counter