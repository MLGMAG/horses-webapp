import type { Route } from "../+types/root";
import horseHospitalImage from "./images/horse_hospital.png";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Medicine" }];
}

export default function Medicine() {
  return (
    <>
      <div className="mx-auto px-6 lg:px-8 mt-10 md:mt-14">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div>
            <h3 className="block font-display text-base font-semibold text-neutral-950 italic lg:w-max lg:mx-auto">
              Medicine
            </h3>
            <h1 className="mt-4 lg:mt-2 lg:mb-12 block max-w-5xl font-display text-5xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-6xl lg:w-max lg:mx-auto">
              Overview
            </h1>
          </div>
          <p className="my-6 max-w-3xl text-lg text-neutral-600 lg:w-max lg:mx-auto lg:mb-12 lg:text-justify">
            We offer specialized medicine services to ensure the health and
            well-being of horses during transport. Our services include
            veterinary support, medical documentation, temperature-controlled
            shipping for medications, and compliance with international health
            regulations. We prioritize the safe and timely delivery of essential
            equine medicines, providing peace of mind for owners and caretakers
            worldwide.
          </p>
          <div>
            <img
              className="rounded-4xl mx-auto"
              src={horseHospitalImage}
              alt="Horse in a hospital"
            />
          </div>
        </div>
      </div>
    </>
  );
}
