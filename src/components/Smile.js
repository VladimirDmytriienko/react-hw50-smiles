import React, { useState } from 'react';

const Smile = ({ emoji }) => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>{emoji}</button>
      <span>Count: {count}</span>
    </div>
  );
};

export default Smile;
