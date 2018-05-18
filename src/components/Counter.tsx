import * as React from 'react';

interface CounterProps {
  value: number;
  onIncrease(): void;
  onDecrease(): void;
}

const Counter: React.SFC<CounterProps> = ({ value, onIncrease, onDecrease }) => {
  return (
    <div>
      <h1>{value}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
};

export default Counter;
