import CostChart from "@/components/CostChart";
import Speakers from "@/components/Speakers";
import ActionTable from "@/components/ActionTable";
import Timeline from "@/components/Timeline";
import Sidebar from "@/components/Sidebar";

export default function DashboardPage() {
  return (
    <div className="flex bg-black text-white min-h-screen">
      
      <Sidebar />

      <main className="flex-1 p-8">

        <h1 className="text-5xl font-bold mb-8">
          Meeting Analysis Report
        </h1>

        <div className="grid md:grid-cols-4 gap-6 mb-8">

          <div className="bg-[#111] p-6 rounded-xl">
            <p className="text-gray-400">Meeting Health</p>
            <h2 className="text-4xl font-bold text-yellow-400">
              41/100
            </h2>
          </div>

          <div className="bg-[#111] p-6 rounded-xl">
            <p className="text-gray-400">Total Cost</p>
            <h2 className="text-4xl font-bold text-green-400">
              $847
            </h2>
          </div>

          <div className="bg-[#111] p-6 rounded-xl">
            <p className="text-gray-400">Wasted Cost</p>
            <h2 className="text-4xl font-bold text-red-400">
              $312
            </h2>
          </div>

          <div className="bg-[#111] p-6 rounded-xl">
            <p className="text-gray-400">Action Items</p>
            <h2 className="text-4xl font-bold text-blue-400">
              4
            </h2>
          </div>

        </div>

        <div className="bg-[#111] rounded-xl p-6 mb-6">
          <h2 className="text-green-400 font-bold mb-3">
            AI Summary
          </h2>

          <p>
            The meeting spent 38% of its time revisiting unresolved topics.
            Two action items were left without owners, increasing execution risk.
          </p>
        </div>

        <div className="bg-[#111] rounded-xl p-6 mb-8">
          <h2 className="text-green-400 font-bold mb-3">
            Recommendations
          </h2>

          <ul className="space-y-3">
            <li>✅ Assign owners before ending meetings</li>
            <li>✅ Limit repeated discussion loops</li>
            <li>✅ Define clear success criteria</li>
            <li>✅ Track action items weekly</li>
          </ul>
        </div>

        <CostChart />
        <Speakers />
        <ActionTable />
        <Timeline />

      </main>

    </div>
  );
}