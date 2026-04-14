export default function SlowComponent() {
  const start = Date.now();
  while (Date.now() - start < 2000) {
    // simulate delay
  }

  return <h2>Slow Component Loaded</h2>;
}