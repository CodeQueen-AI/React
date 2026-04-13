import React, { Suspense, lazy } from "react";

const About = lazy(() => import("./components/About"));

function App() {
  return (
    <div>
      <h1>Home Page</h1>

      <About />
    </div>
  );
}

export default App;