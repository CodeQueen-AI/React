import { createContext, useContext } from "react";

const UserContext = createContext("Guest");

function Child() {
  const user = useContext(UserContext);
  return <h2>User: {user}</h2>;
}

function App() {
  return (
    <UserContext.Provider value="Code Queen">
      <Child />
    </UserContext.Provider>
  );
}

export default App;