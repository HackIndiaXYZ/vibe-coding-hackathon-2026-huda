export default function Speakers() {
    return (
      <div className="bg-[#111] rounded-xl p-6 mt-6">
        <h2 className="text-green-400 text-xl font-bold mb-4">
          Detected Speakers
        </h2>
  
        <div className="space-y-3">
  
          <div className="flex justify-between">
            <span>John</span>
            <span>42%</span>
          </div>
  
          <div className="flex justify-between">
            <span>Sarah</span>
            <span>31%</span>
          </div>
  
          <div className="flex justify-between">
            <span>Mike</span>
            <span>17%</span>
          </div>
  
          <div className="flex justify-between">
            <span>Others</span>
            <span>10%</span>
          </div>
  
        </div>
      </div>
    );
  }