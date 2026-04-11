import { useRef } from "react";

function UncontrolledForm() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Name: " + inputRef.current?.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Uncontrolled Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          ref={inputRef}
          style={{ padding: "8px", marginRight: "10px" }}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UncontrolledForm;