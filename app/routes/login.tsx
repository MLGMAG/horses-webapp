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
      <div className="mx-5 mt-25 mb-10 w-max mx-auto">
        <div className="flex flex-col gap-0">
          <h1 className="text-2xl/5 font-semibold">Ride it.</h1>
          <h2 className="text-2xl font-semibold text-gray-400">
            Login to your account
          </h2>
        </div>
        <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-2"></hr>
        <form action="#">
          <div>
            <label className="text-sm text-gray-600" htmlFor="email">
              Email
            </label>
            <div>
              <input
                className="border-1 border-gray-200 rounded-lg w-full px-2 py-2.5 text-sm"
                type="text"
                id="email"
                placeholder="Enter your email address..."
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm text-gray-600" htmlFor="password">
              Password
            </label>
            <div>
              <input
                className="border-1 border-gray-200 rounded-lg w-full px-2 py-2.5 text-sm"
                type="password"
                id="password"
                placeholder="Enter your password..."
              />
            </div>
          </div>
          <div className="text-center">
            <button
              className="mt-10 w-full inline-flex rounded-lg py-4 text-sm font-semibold transition bg-neutral-950 text-center text-white hover:bg-sky-400"
              type="submit"
            >
              <div className="w-full mx-auto text-base">Login</div>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
