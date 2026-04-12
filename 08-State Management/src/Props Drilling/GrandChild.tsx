function GrandChild({ user }: any) {
  return (
    <div>
      <h1>Name: {user.name}</h1>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default GrandChild;