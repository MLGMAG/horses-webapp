import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Social Network" }];
}

export default function Social() {
  return (
    <>
      <h1>Social network</h1>
      <p>Find, message, like, repost and many more with the horse network!</p>
    </>
  );
}
