function App() {
  const users = ["Ali", "Sara", "Ahmed"];

  return (
    <div>
      <h1>List Example</h1>

      {users.map((user) => (
        <h2>{user}</h2>
      ))}
    </div>
  );
}

export default App;