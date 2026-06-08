export default function Navbar() {
    return (
      <nav className="flex justify-between items-center px-8 py-6">
        <h1 className="text-2xl font-bold text-green-500">
          MeetingLens
        </h1>
  
        <button className="bg-green-500 px-5 py-2 rounded-lg text-black font-semibold">
          Get Started
        </button>
      </nav>
    );
  }