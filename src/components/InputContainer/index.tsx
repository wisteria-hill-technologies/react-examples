import { FC, useRef, useEffect, memo } from 'react';

interface Props {
  count: number;
  handleIncrement: ()=> void;
}

const InputContainer: FC<Props> = ({ count, handleIncrement }) => {
  console.log('render InputContainer!');
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    inputRef?.current?.focus();
  }, []);
  return (
    <div>
      <h2>Input with Ref</h2>
      <input
        ref={inputRef}
      />
      <h2>Passed Count: { count }</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default memo(InputContainer);