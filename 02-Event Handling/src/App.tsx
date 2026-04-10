import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  // Click Event
  function handleClick() {
    alert("Button Clicked!");
  }

  // Change Event 
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  // Submit Event 
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Form Submitted: " + text);
  }

  // Mouse Event 
  function handleMouseOver() {
    console.log("Mouse is over button!");
  }

  return (
    <div>
      <h1>React Events</h1>

      {/* Click Event */}
      <button onClick={handleClick}>
        Click Me
      </button>

      {/* Mouse Event */}
      <button onMouseOver={handleMouseOver}>
        Hover Me
      </button>

      {/* Change Event */}
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type here"/>

      <p>You typed: {text}</p>

      {/* Submit Event */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder="Enter and submit"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;