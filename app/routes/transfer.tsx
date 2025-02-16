import type { Route } from "../+types/root";
import horseTransferImage from "./images/horse_transfer.png";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Transfer" }];
}

export default function Transfer() {
  return (
    <>
      <div className="mx-auto px-6 lg:px-8 mt-10 md:mt-14">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div>
            <h3 className="block font-display text-base font-semibold text-neutral-950 italic lg:w-max lg:mx-auto">
              Transfer
            </h3>
            <h1 className="mt-4 lg:mt-2 lg:mb-12 block max-w-5xl font-display text-5xl font-medium tracking-tight [text-wrap:balance] text-neutral-950 sm:text-6xl lg:w-max lg:mx-auto">
              Overview
            </h1>
          </div>
          <p className="my-6 max-w-3xl text-lg text-neutral-600 lg:w-max lg:mx-auto lg:mb-12 lg:text-justify">
            We offer end-to-end horse shipping solutions, including flight
            bookings, quarantine management, veterinary compliance, and
            real-time tracking. Designed for horse owners, breeders, and
            trainers, the platform ensures safe, efficient, and stress-free
            international horse logistics with expert handling and customized
            transport options.
          </p>
          <div>
            <img
              className="rounded-4xl mx-auto"
              src={horseTransferImage}
              alt="Three horses in hospital"
            />
          </div>
        </div>
      </div>
    </>
  );
}
