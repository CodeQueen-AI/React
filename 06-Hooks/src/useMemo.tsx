import { useState, useMemo } from "react";

function ExpensiveCalc() {
  const [num, setNum] = useState(0);

  const squared = useMemo(() => {
    console.log("Calculating...");
    return num * num;
  }, [num]);

  return (
    <div>
      <h2>Square: {squared}</h2>
      <button onClick={() => setNum(num + 1)}>Increase</button>
    </div>
  );
}

export default ExpensiveCalc;