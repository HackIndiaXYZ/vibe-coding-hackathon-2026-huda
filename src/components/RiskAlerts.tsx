export default function RiskAlerts() {
    return (
      <div className="bg-[#111] rounded-xl p-6 mb-8">
        <h2 className="text-red-400 font-bold text-xl mb-4">
          ⚠ AI Risk Alerts
        </h2>
  
        <div className="space-y-4">
  
          <div className="bg-black p-4 rounded-lg border border-red-900">
            Budget discussion repeated 6 times.
          </div>
  
          <div className="bg-black p-4 rounded-lg border border-red-900">
            Marketing plan has no assigned owner.
          </div>
  
          <div className="bg-black p-4 rounded-lg border border-yellow-700">
            Meeting exceeded planned duration by 18 minutes.
          </div>
  
        </div>
      </div>
    );
  }