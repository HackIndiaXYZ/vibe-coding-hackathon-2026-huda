export default function MeetingScore() {
    return (
      <div className="bg-[#111] rounded-xl p-8 mb-8 border border-gray-800">
  
        <div className="flex items-center justify-between">
  
          <div>
            <h2 className="text-2xl font-bold mb-2">
              AI Meeting Score
            </h2>
  
            <p className="text-gray-400">
              Overall meeting effectiveness
            </p>
          </div>
  
          <div className="text-center">
            <h1 className="text-6xl font-bold text-yellow-400">
              41
            </h1>
  
            <p className="text-gray-400">
              /100
            </p>
          </div>
  
        </div>
  
        <div className="mt-6 space-y-2">
  
          <p className="text-red-400">
            ❌ Budget discussion repeated 6 times
          </p>
  
          <p className="text-red-400">
            ❌ 2 action items without owners
          </p>
  
          <p className="text-yellow-400">
            ⚠ Meeting exceeded planned duration
          </p>
  
          <p className="text-green-400">
            ✅ 4 action items identified
          </p>
  
        </div>
  
      </div>
    );
  }