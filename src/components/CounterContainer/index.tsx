import {FC} from 'react';

interface Props {
  count: number;
  handleIncrement: () => void;
}

const CounterContainer: FC<Props> = ({ count, handleIncrement }) => {
  console.log('render CounterContainer!');
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default CounterContainer;