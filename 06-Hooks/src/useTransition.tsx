import { useState, useTransition } from "react";

function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  function handleChange(e) {
    const value = e.target.value;
    setText(value);

    startTransition(() => {
      const items = [];
      for (let i = 0; i < 5000; i++) {
        items.push(value);
      }
      setList(items);
    });
  }

  return (
    <>
      <input value={text} onChange={handleChange} />

      {isPending && <p>Loading...</p>}

      {list.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </>
  );
}

export default App;