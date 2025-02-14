import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login" },
    { name: "description", content: "Please provide credentials" },
  ];
}

export default function Login() {
  return (
    <>
      <h1>Login page</h1>
      <p>Please enter your login and password</p>
    </>
  );
}
