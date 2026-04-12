import { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Shared State Example</h1>

      <ChildA count={count} setCount={setCount} />
      <ChildB count={count} setCount={setCount} />
    </div>
  );
}

export default Parent;