import Link from "next/link";

export default function UploadPage() {
    return (
      <main className="bg-black min-h-screen text-white flex items-center justify-center p-6">
        <div className="w-full max-w-3xl bg-[#0d0d0d] border border-gray-800 rounded-3xl p-10">
  
          <h1 className="text-4xl font-bold mb-4">
            Upload Meeting Data
          </h1>
  
          <p className="text-gray-400 mb-8">
            Upload transcript, PDF notes, or meeting recording.
          </p>
  
          <div className="border-2 border-dashed border-green-500 rounded-2xl p-12 text-center">
  
            <p className="text-xl mb-3">
              Drag & Drop Files Here
            </p>
  
            <p className="text-gray-500 mb-6">
              TXT • PDF • MP3 • MP4
            </p>
  
            <Link
                   href="/analyze"
                   className="bg-green-500 text-black px-6 py-3 rounded-lg font-semibold">

                    Analyze Meeting
            </Link>
          </div>
  
        </div>
      </main>
    );
  }