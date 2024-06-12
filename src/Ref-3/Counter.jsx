import React, { useRef, useState } from 'react';

const Counter = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);
  const changeRef = useRef(null);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
    changeRef.current = count > initialValue ? 'up' : 'same';
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
    changeRef.current = count < initialValue ? 'down' : 'same';
  };

  const printChange = () => {
    if (changeRef.current !== null && changeRef.current !== 'same') {
      console.log(`Counter changed: ${changeRef.current}`);
      changeRef.current = null; // Reset ref after printing
    }
  };

  useEffect(() => {
    printChange();
  }, []); 

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
