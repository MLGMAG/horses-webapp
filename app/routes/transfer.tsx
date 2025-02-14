import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Transfer" }];
}

export default function Transfer() {
  return (
    <>
      <h1>Transfer</h1>
      <p>Move your horse from anywhere to anywhere!</p>
    </>
  );
}
