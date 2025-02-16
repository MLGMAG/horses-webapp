import { Link } from "react-router";
import type { Route } from "../+types/root";
import horseTransferImage from "./images/horse_transfer.png";
import horseHospitalImage from "./images/horse_hospital.png";
import horseSocialImage from "./images/horse_social.png";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Horses App" },
    { name: "description", content: "Welcome to Horses app!" },
  ];
}

export default function Home() {
  return (
    <>
      <div className="pt-20 xl:pt-27 px-4 text-center">
        <h1 className="text-[44px]/15 xl:text-6xl font-semibold text-center text-slate-900">
          Global <br />
          <span className="underline">horses logistics</span> <br />
          provider.
        </h1>
        <p className="mt-6 xl:mt-12 text-lg xl:text-xl 2xl:text-2xl text-slate-700">
          Specialized system for seamless equine transportation worldwide.{" "}
          <br />
          Designed for horse owners, breeders, and trainers.
        </p>
      </div>
      <div className="my-24 rounded-4xl bg-neutral-950 py-20 sm:hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-xl w-full text-center font-display text-sm font-semibold tracking-wider text-white">
              Our services includes
            </h2>
            <div className="mt-10 text-white text-lg flex flex-col text-center gap-4">
              <div className="flex flex-row items-center gap-4">
                <a href="#transfer" className="w-full hover:text-sky-400">
                  Horse transfer
                </a>
                <a href="#social" className="w-full hover:text-sky-400">
                  Social network
                </a>
              </div>
              <div>
                <a href="#medicine" className="w-full hover:text-sky-400">
                  Medicine
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="transfer"
        className="max-w px-6 lg:px-8 mt-24 sm:mt-32 lg:mt-40 bg-slate-200"
      >
        <div className="mx-auto max-w-2xl lg:w-max py-8">
          <div className="max-w-2xl">
            <h2 className="block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-neutral-950 lg:text-center">
              Horse transfer
            </h2>
            <p className="my-6 2xl:my-8 text-xl 2xl:text-2xl text-neutral-600 2xl:text-justify">
              End-to-end horse shipping solutions, including flight bookings,
              quarantine management, veterinary compliance, and real-time
              tracking.
            </p>
            <Link to="/transfer" className="mt-6 text-sky-500 font-semibold 2xl:text-lg">
              Discovery opportunities →
            </Link>
            <div className="mt-6">
              <img
                className="rounded-4xl mx-auto"
                src={horseTransferImage}
                alt="Three horses in hospital"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        id="medicine"
        className="max-w px-6 lg:px-8 sm:mt-12 lg:mt-8"
      >
        <div className="mx-auto max-w lg:w-max py-8">
          <div className="max-w-2xl">
            <h2 className="block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-neutral-950 lg:text-center">
              Medicine
            </h2>
            <p className="my-6 2xl:my-8 text-xl 2xl:text-2xl text-neutral-600 2xl:text-justify">
              Our services include veterinary support, medical documentation,
              temperature-controlled shipping for medications, and compliance
              with international health regulations. We prioritize the safe and
              timely delivery of essential equine medicines, providing peace of
              mind for owners and caretakers worldwide.
            </p>
            <Link to="/medicine" className="mt-6 text-sky-500 font-semibold 2xl:text-lg">
              Search for a specialist →
            </Link>
            <div className="mt-6">
              <img
                className="rounded-4xl mx-auto"
                src={horseHospitalImage}
                alt="Horse in a hospital"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        id="social"
        className="max-w px-6 lg:px-8 sm:mt-12 lg:mt-8 bg-slate-200"
      >
        <div className="mx-auto max-w-2xl lg:w-max py-8">
          <div className="max-w-2xl">
            <h2 className="block font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-neutral-950 lg:text-center">
              Social network
            </h2>
            <p className="my-6 2xl:my-8 text-xl 2xl:text-2xl text-neutral-600 2xl:text-justify">
              Dedicated social network for horse enthusiasts, owners, breeders,
              and trainers. This platform allows users to connect, share
              experiences, discuss equine care, and stay updated on industry
              trends.
            </p>
            <Link to="/social" className="mt-6 text-sky-500 font-semibold 2xl:text-lg">
              Like, share and repost! →
            </Link>
            <div className="mt-6">
              <img
                className="rounded-4xl mx-auto"
                src={horseSocialImage}
                alt="Walking with horses"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
