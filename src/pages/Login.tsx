import { Navigate } from "react-router-dom";
import LoginForm from "../features/authentication/LoginForm";
import { useUser } from "../features/authentication/useUser";

export default function Login() {
  const { isAuthenticated, isPending } = useUser();

  if (isPending) return <p>Loading...</p>;

  if (isAuthenticated) return <Navigate to="/dashboard" replace />;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <LoginForm />
    </div>
  );
}
