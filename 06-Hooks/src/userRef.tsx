import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Type here" />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
}

export default InputFocus;