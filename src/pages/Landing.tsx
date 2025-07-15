import { Navigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";

function Landing() {
  const { isAuthenticated, isPending } = useUser();

  if (isPending) return <p>Loading...</p>;

  if (isAuthenticated) return <Navigate to="/dashboard" replace />;

  return (
    <div>
      <h1>Welcome to Pulse</h1>
    </div>
  );
}

export default Landing;
