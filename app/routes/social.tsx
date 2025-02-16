import type { Route } from "../+types/root";
import horseSocialImage from "./images/horse_social.png";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Social Network" }];
}

export default function Social() {
  return (
    <>
      <div className="mx-auto px-6 lg:px-8 mt-10 md:mt-14">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div>
            <h3 className="block font-display text-base font-semibold text-neutral-950 italic lg:w-max lg:mx-auto">
              Social network
            </h3>
            <h1 className="mt-4 lg:mt-2 lg:mb-12 block max-w-5xl font-display text-5xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-6xl lg:w-max lg:mx-auto">
              Overview
            </h1>
          </div>
          <p className="my-6 max-w-3xl text-lg text-neutral-600 lg:w-max lg:mx-auto lg:mb-12 lg:text-justify">
            A dedicated social network for horse enthusiasts, owners, breeders,
            and trainers. This platform allows users to connect, share
            experiences, discuss equine care, and stay updated on industry
            trends. With forums, groups, and messaging features, it fosters a
            global community passionate about horses, enhancing collaboration
            and knowledge-sharing across the equestrian world.
          </p>
          <div>
            <img
              className="rounded-4xl mx-auto"
              src={horseSocialImage}
              alt="Walking with horses"
            />
          </div>
        </div>
      </div>
    </>
  );
}
