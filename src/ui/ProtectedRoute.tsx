import { useUser } from "../features/authentication/useUser";
import { Navigate, useLocation } from "react-router-dom";
import { type JSX } from "react";

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const { isPending, isAuthenticated } = useUser();
  const location = useLocation();

  // 1- Show loading while checking user
  if (isPending) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  // 2- If not authenticated, redirect to login and preserve current path
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // 3- If authenticated, render protected content
  return children;
}

export default ProtectedRoute;
