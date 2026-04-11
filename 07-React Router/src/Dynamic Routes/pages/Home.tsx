import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h2>Home Page</h2>

      {/* Dynamic Links */}
      <Link to="/user/1">User 1</Link> <br />
      <Link to="/user/2">User 2</Link> <br />
      <Link to="/user/100">User 100</Link>
    </div>
  );
}

export default Home;