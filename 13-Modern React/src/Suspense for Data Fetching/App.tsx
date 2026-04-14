import { Suspense } from "react";
import User from "./User";

function App() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <User />
    </Suspense>
  );
}

export default App;