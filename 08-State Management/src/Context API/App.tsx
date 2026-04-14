import { UserContext } from "./UserContext";
import Parent from "./Parent";

function App() {
  const user = {
    name: "CodeQueen",
    age: 19
  };

  return (
    <UserContext.Provider value={user}>
      <Parent />
    </UserContext.Provider>
  );
}

export default App;