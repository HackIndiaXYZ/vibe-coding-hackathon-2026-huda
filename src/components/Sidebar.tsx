export default function Sidebar() {
    return (
      <div className="w-64 bg-[#111] min-h-screen p-6 border-r border-gray-800">
        <h2 className="text-green-400 text-2xl font-bold mb-10">
          MeetingLens
        </h2>
  
        <div className="space-y-5 text-gray-300">
          <p>📊 Dashboard</p>
          <p>📁 Meetings</p>
          <p>👥 Speakers</p>
          <p>✅ Action Items</p>
          <p>⚙ Settings</p>
        </div>
      </div>
    );
  }