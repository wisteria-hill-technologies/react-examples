import {FC, useCallback, useMemo, useState} from 'react';
import CounterContainer from '../components/CounterContainer';
import InputContainer from '../components/InputContainer';

const Index: FC = () => {
  const [ count, updateCount ] = useState<number>(0);
  const memorizedUpdateCount = useCallback(()=>updateCount(c => c+1), []);
  const memorizedCount = useMemo(()=>count, []);
  return (
    <div>
      <h1>Examples</h1>
      <CounterContainer count={count} handleIncrement={memorizedUpdateCount} />
      <InputContainer count={memorizedCount} handleIncrement={memorizedUpdateCount} />
    </div>
  );
};

export default Index;