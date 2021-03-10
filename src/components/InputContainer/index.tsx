import {FC, useRef, useEffect, memo, useContext} from 'react';
import {UserContext} from '../../UserContext';

interface Props {
  count: number;
  handleIncrement: ()=> void;
}

const InputContainer: FC<Props> = ({ count, handleIncrement }) => {
  console.log('render InputContainer!');
  const user = useContext(UserContext);
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    inputRef?.current?.focus();
  }, []);
  return (
    <div>
      <h2>Input with Ref</h2>
      <p>Username: { user?.username }</p>
      <input
        ref={inputRef}
      />
      <h2>Passed Count: { count }</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default memo(InputContainer);