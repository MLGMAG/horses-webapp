import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Medicine" }];
}

export default function Medicine() {
  return (
    <>
      <h1>Medical services</h1>
      <p>Description...</p>
    </>
  );
}
