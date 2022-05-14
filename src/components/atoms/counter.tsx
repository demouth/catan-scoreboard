import React from 'react';
import settlement from 'images/settlement.svg';

function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="Counter SideBySide">
      <button type="button" onClick={() => setCount(count + 1)}>+</button>
      <p>{count}</p>
      <button type="button" onClick={() => setCount(count - 1)}>-</button>
    </div>
  )
}

export default Counter;
