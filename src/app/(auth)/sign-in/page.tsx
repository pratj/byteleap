"use client";

import { signIn } from "@/actions/auth/signIn";

const LoginForm = () => {
  const handleSubmit = async (event: React.FormEvent) => {
    console.log(event.currentTarget.email.value, "Email");

    await signIn(
      event.currentTarget.email.value,
      event.currentTarget.password.value
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
