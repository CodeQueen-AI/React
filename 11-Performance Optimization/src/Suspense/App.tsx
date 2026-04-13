import React, { Suspense, lazy } from "react";

const About = lazy(() => import("./components/About"));

function App() {
  return (
    <div>
      <h1>Home Page</h1>

      <Suspense fallback={<h3>Loading...</h3>}>
        <About />
      </Suspense>
    </div>
  );
}

export default App;