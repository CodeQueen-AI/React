import useSWR from "swr";
import { fetchUsers } from "./api/usersApi";

const fetcher = () => fetchUsers();

function Users() {
  const { data, error, isLoading } = useSWR("users", fetcher);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;