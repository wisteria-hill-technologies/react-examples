import {FC, useContext } from 'react';
import { UserContext } from '../../UserContext';

interface Props {
  count: number;
  handleIncrement: () => void;
}

const CounterContainer: FC<Props> = ({ count, handleIncrement }) => {
  console.log('render CounterContainer!');
  const user = useContext(UserContext);
  return (
    <div>
      <h2>Counter: {count}</h2>
      <p>Username: { user?.username }</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default CounterContainer;