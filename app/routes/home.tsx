import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Horses App" },
    { name: "description", content: "Welcome to Horses app!" },
  ];
}

export default function Home() {
  return (
    <>
      <h1>Horses application</h1>
      <p>Application is really powerful!</p>
    </>
  );
}
