"use client";
import { AlertCircle } from "lucide-react";

const ErrorPage = () => {
  const exceptionName = "PageNotFoundException";
  return (
    <div
      className="min-h-screen  text-white p-8"
      style={{
        boxShadow: "0 var(8px) var(32px) rgba(0, 0, 0, 0.25)",
        backgroundColor: "rgb(44, 44, 46)",
      }}
    >
      <div
        className="max-w-3xl mx-auto bg-[#1D1C1F] p-4"
        style={{
          // #ff5555
          borderTop: "5px solid #ff5555",
          borderRadius: "0.5rem",
        }}
      >
        {/* red vertical line */}
        <div className="border-b border-[#FF0000]/20 pb-4 mb-6">
          <h1 className="text-2xl font-semibold">
            Exception in thread &quot;main&quot;
          </h1>
          <span className="text-2xl text-red-600">{exceptionName}</span>
        </div>

        <div className="bg-gray-600 text-[#FF0000] p-4 rounded mb-6">
          <p className="font-mono">Failed to compile</p>
        </div>

        <div className="flex items-start gap-2 text-[#FF4444] mb-6">
          <AlertCircle className="w-5 h-5 mt-1" />
          <div>
            <p>Next.js (14.2.14) is outdated</p>
            <a href="#" className="text-[#3291FF] hover:underline">
              (learn more)
            </a>
          </div>
        </div>

        <div className="bg-[#111010] rounded-lg p-4">
          <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
            <span>./app/not-found/page.tsx</span>
            <button className="hover:text-white transition-colors">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </button>
          </div>

          <div className="text-[#E06C75] mb-4">
            <p>Error:</p>
            <div className="ml-4">
              <p>
                × You have a tried to access a Client Component that does not
                exist
              </p>
              <p className="text-gray-400">
                Learn more:
                <a href="#" className="text-[#3291FF] hover:underline">
                  https://0xabhay.in/
                </a>
              </p>
            </div>
          </div>

          <pre className="font-mono text-sm">
            <code>
              <span className="text-gray-500">2 |</span>
              {"\n"}
              <span className="text-gray-500">3 |</span> if (redirectPath ===
              &quot;&quot;)
              {"{"}
              {"\n"}
              <span className="text-gray-500">4 |</span> throw new{" "}
              <span className="text-[#E06C75]">{exceptionName}</span>(
              &quot;Client Component not found&quot;);
            </code>
          </pre>
        </div>

        <p className="text-gray-400 mt-6 text-sm">
          This error occurred during the run time process and can only be
          dismissed by requesting a valid path. Please check the URL and try
          again.
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
