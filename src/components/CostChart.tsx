export default function CostChart() {
    return (
      <div className="bg-[#111] rounded-xl p-6 mt-6">
        <h2 className="text-green-400 text-xl font-bold mb-4">
          Meeting Cost Trend
        </h2>
  
        <div className="flex items-end gap-4 h-48">
          <div className="bg-green-500 w-12 h-24 rounded"></div>
          <div className="bg-green-500 w-12 h-36 rounded"></div>
          <div className="bg-green-500 w-12 h-20 rounded"></div>
          <div className="bg-green-500 w-12 h-44 rounded"></div>
          <div className="bg-green-500 w-12 h-28 rounded"></div>
        </div>
  
        <p className="text-gray-400 mt-4">
          Last 5 Meetings Cost Comparison
        </p>
      </div>
    );
  }