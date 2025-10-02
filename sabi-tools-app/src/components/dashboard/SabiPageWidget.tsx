import React from "react";

// A simple icon component for demonstration purposes.
const LinkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-sabi-green"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
    />
  </svg>
);

const SabiPageWidget = () => {
  const clicksToday = 25; // This data would come from an API

  return (
    <div className="bg-sabi-white border border-sabi-gray rounded-lg p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-display text-xl font-bold text-sabi-green">
          SabiPage
        </h2>
        <LinkIcon />
      </div>
      <div>
        <p className="text-5xl font-bold text-sabi-black">{clicksToday}</p>
        <p className="text-sabi-black/60">clics aujourd'hui</p>
      </div>
    </div>
  );
};

export default SabiPageWidget;