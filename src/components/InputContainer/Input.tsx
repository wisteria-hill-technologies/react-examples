import { forwardRef, ReactNode} from 'react';

const InputWithRef = forwardRef<HTMLInputElement>((props, ref) => {
  return (
    <div>
      <label htmlFor="inputBox">Input Box: </label>
      <input id="inputBox" ref={ref} />
    </div>
  );
});

export default InputWithRef;