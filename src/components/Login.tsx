import { useState } from "react";
import { makeLoginApiRequest } from "../utils";

interface LoginProps {
  onSubmit: (formData: any) => Promise<{ error?: string }>;
}

function Login({}: LoginProps) {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setStatus("pending");

    const formData = new FormData(event.currentTarget);

    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    const response = await makeLoginApiRequest({ username, password });

    if (response.error) {
      setStatus("error");
      setError(response.error);
    } else {
      setStatus("success");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input id="username" />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
        <button type="submit">Submit</button>
        <span>{status === "pending" ? "Saving..." : null}</span>
        <span>{status === "error" ? error : null}</span>
      </form>
    </div>
  );
}

export default Login;
