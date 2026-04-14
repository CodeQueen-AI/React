function ChildA({ count, setCount }: any) {
  return (
    <div>
      <h2>Child A</h2>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default ChildA;