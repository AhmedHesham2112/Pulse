import { useState } from "react";
import { useLogin } from "./useLogin";

export default function LoginForm() {
  const [email, setEmail] = useState("pulse@example.com");
  const [password, setPassword] = useState("pulse.123");
  const { login, isPending } = useLogin();

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        login({ email, password });
      }}
    >
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border p-2 rounded w-full"
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border p-2 rounded w-full"
        />
      </label>
      <button
        type="submit"
        disabled={isPending}
        className="bg-primary text-white p-2 rounded"
      >
        {isPending ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
