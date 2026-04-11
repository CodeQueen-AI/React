import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component Mounted / Updated");

    return () => {
      console.log("Cleanup (Unmount)");
    };
  }, [count]);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}

export default Timer;