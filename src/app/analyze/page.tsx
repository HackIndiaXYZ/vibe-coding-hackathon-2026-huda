"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AnalyzePage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/dashboard");
    }, 5000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="bg-black min-h-screen text-white flex items-center justify-center">
      <div className="bg-[#111] p-10 rounded-xl w-[700px]">
        <h1 className="text-4xl font-bold mb-8 text-center">
          AI Processing Meeting
        </h1>

        <p className="mb-4">✅ Uploading files...</p>
        <p className="mb-4">✅ Analyzing transcript...</p>
        <p className="mb-4">✅ Detecting speakers...</p>
        <p className="mb-4">⏳ Calculating ROI...</p>
        <p>⏳ Generating recommendations...</p>
      </div>
    </div>
  );
}