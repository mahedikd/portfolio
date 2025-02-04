import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BiSolidError as ErrorIcon,
  BiHomeAlt as HomeIcon,
  BiArrowBack as BackIcon,
} from "react-icons/bi";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => navigate("/");
  const handleBackClick = () => navigate(-1);

  return (
    <div className="flex min-h-screen w-full items-center justify-center p-4">
      <div className="mx-auto w-full max-w-2xl space-y-8 text-center">
        {/* 404 Illustration */}
        <div className="relative">
          <div className="relative mx-auto h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48">
            <div className="absolute inset-0 animate-pulse rounded-full bg-gray-100" />
            <ErrorIcon
              className="relative z-10 h-full w-full animate-bounce text-gray-900"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-gray-900 sm:text-7xl md:text-8xl">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 sm:text-3xl md:text-4xl">
            Page Not Found
          </h2>
          <p className="mx-auto max-w-md text-base text-gray-600 sm:text-lg">
            Oops! The page you're looking for seems to have wandered off. Let's get you back on
            track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
          <button
            onClick={handleHomeClick}
            className="inline-flex w-full items-center justify-center rounded-lg border border-transparent bg-gray-900 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors duration-300 hover:bg-gray-950 sm:w-auto"
          >
            <HomeIcon className="mr-2 h-5 w-5" />
            Go Home
          </button>

          <button
            onClick={handleBackClick}
            className="inline-flex w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm transition-colors duration-300 hover:bg-gray-50 sm:w-auto"
          >
            <BackIcon className="mr-2 h-5 w-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
