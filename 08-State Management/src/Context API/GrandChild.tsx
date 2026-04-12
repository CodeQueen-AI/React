import { useContext } from "react";
import { UserContext } from "./UserContext";

function GrandChild() {
  const user = useContext(UserContext);

  return (
    <div>
      <h1>Name: {user.name}</h1>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default GrandChild;