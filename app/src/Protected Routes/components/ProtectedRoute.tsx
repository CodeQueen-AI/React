import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const isAuth = false; // 🔴 change this to true to allow access

  if (!isAuth) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;