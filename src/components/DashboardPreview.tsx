export default function DashboardPreview() {
    return (
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold text-center mb-4">
          AI Meeting Dashboard
        </h2>
  
        <p className="text-center text-gray-400 mb-14">
          Instantly understand meeting performance and ROI.
        </p>
  
        <div className="bg-[#0d0d0d] border border-gray-800 rounded-3xl p-8">
  
          <div className="grid md:grid-cols-4 gap-6 mb-8">
  
            <div className="bg-black rounded-xl p-5">
              <p className="text-gray-400">Health Score</p>
              <h3 className="text-4xl font-bold text-yellow-400">
                41/100
              </h3>
            </div>
  
            <div className="bg-black rounded-xl p-5">
              <p className="text-gray-400">Total Cost</p>
              <h3 className="text-4xl font-bold text-green-400">
                $847
              </h3>
            </div>
  
            <div className="bg-black rounded-xl p-5">
              <p className="text-gray-400">Wasted Cost</p>
              <h3 className="text-4xl font-bold text-red-400">
                $312
              </h3>
            </div>
  
            <div className="bg-black rounded-xl p-5">
              <p className="text-gray-400">Action Items</p>
              <h3 className="text-4xl font-bold text-blue-400">
                4
              </h3>
            </div>
  
          </div>
  
          <div className="bg-black rounded-xl p-6">
            <h3 className="text-green-400 font-semibold mb-3">
              Top AI Finding
            </h3>
  
            <p className="text-gray-300">
              Circular discussion detected. The same topic
              was revisited 6 times without a final decision,
              resulting in approximately $126 of wasted meeting cost.
            </p>
          </div>
  
        </div>
      </section>
    );
  }