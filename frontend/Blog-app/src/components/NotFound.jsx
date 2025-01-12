import React from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 relative">
        <img
          src="/src/assets/Notfound-background.avif"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-10">
          <main className="grid min-h-full place-items-center bg-transparent px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
              <p className="text-base font-semibold text-white">404</p>
              <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                Page not found
              </h1>
              <p className="mt-6 text-pretty text-lg font-medium text-gray-200 sm:text-xl/8">
                Sorry, we couldn’t find the page you’re looking for.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/"
                  className="inline-flex items-center text-sm font-semibold text-white "
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to home
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default NotFound;
