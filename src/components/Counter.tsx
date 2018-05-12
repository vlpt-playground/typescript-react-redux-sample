import * as React from 'react';

interface CounterProps {
  number: number;
  onIncrease: () => void;
}

const Counter: React.SFC<CounterProps> = ({ number, onIncrease }) => {
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>INCREMENT!</button>
    </div>
  );
};

export default Counter;
