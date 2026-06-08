import Link from "next/link";

export default function Hero() {
    return (
      <section className="text-center pt-32">
        <h1 className="text-6xl font-bold">
          AI That Calculates
          <br />
          Meeting ROI
        </h1>
  
        <p className="text-gray-400 mt-6 text-xl">
          Know what your meetings cost,
          why they failed,
          and how to improve them.
        </p>
  
        <div className="mt-10 flex justify-center gap-4">
        <Link
              href="/upload"
             className="bg-green-500 px-6 py-3 rounded-lg text-black font-semibold">
             
              Start Analysis
           </Link>
  
          <button className="border border-gray-600 px-6 py-3 rounded-lg">
            Watch Demo
          </button>
        </div>
      </section>
    );
  }