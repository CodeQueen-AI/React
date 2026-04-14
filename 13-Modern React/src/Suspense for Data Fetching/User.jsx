import { use } from "react";

const fetchUser = fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(res => res.json());

export default function User() {
  const user = use(fetchUser);

  return <h1>{user.name}</h1>;
}