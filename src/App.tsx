import {FC, useState, useCallback, useMemo } from 'react';
import './App.css';
import InputContainer from './components/InputContainer';
import CounterContainer from './components/CounterContainer';

const App: FC = () => {
  const [ count, updateCount ] = useState<number>(0);
  const memorizedUpdateCount = useCallback(()=>updateCount(c => c+1), []);
  const memorizedCount = useMemo(()=>count, []);
  return (
    <div className="App">
      <h1>Examples</h1>
      <CounterContainer count={count} handleIncrement={memorizedUpdateCount} />
      <InputContainer count={memorizedCount} handleIncrement={memorizedUpdateCount} />
    </div>
  );
}

export default App;
