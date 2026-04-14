import { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Name: " + name);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Controlled Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ControlledForm;