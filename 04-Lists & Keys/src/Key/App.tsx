function KeyExample() {
  const users = [
    { id: 1, name: "Ali" },
    { id: 2, name: "Sara" },
    { id: 3, name: "Ahmed" }
  ];

  return (
    <div>
      <h2>Key Example</h2>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default KeyExample;