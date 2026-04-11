import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      {/* Navigation */}
      <nav>
        <Link to="profile">Profile</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>

      <hr />

      {/* YAHAN CHILD RENDER HOGA */}
      <Outlet />
    </div>
  );
}

export default Dashboard;