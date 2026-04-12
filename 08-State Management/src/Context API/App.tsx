import { UserContext } from "./UserContext";
import Parent from "./Parent";

function App() {
  const user = {
    name: "Code",
    age: 20
  };

  return (
    <UserContext.Provider value={user}>
      <Parent />
    </UserContext.Provider>
  );
}

export default App;