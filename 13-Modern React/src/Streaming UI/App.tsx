import { Suspense } from "react";
import SlowComponent from "./SlowComponent";

function App() {
  return (
    <>
      <h1>Fast Content</h1>

      <Suspense fallback={<h2>Loading slow part...</h2>}>
        <SlowComponent />
      </Suspense>
    </>
  );
}

export default App;