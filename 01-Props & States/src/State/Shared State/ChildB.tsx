function ChildB({ count, setCount }: any) {
  return (
    <div>
      <h2>Child B</h2>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </div>
  );
}

export default ChildB;