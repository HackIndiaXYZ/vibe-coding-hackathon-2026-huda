export default function DemoCard() {
    return (
      <section className="flex justify-center mt-20">
        <div className="bg-[#111111] border border-gray-800 rounded-2xl p-8 w-[800px] shadow-xl">
  
          <h2 className="text-2xl font-bold mb-6">
            Meeting Cost Analysis
          </h2>
  
          <div className="grid grid-cols-3 gap-6">
  
            <div>
              <p className="text-gray-400">Total Cost</p>
              <h3 className="text-3xl font-bold text-green-500">
                $847
              </h3>
            </div>
  
            <div>
              <p className="text-gray-400">Wasted Cost</p>
              <h3 className="text-3xl font-bold text-red-500">
                $312
              </h3>
            </div>
  
            <div>
              <p className="text-gray-400">Health Score</p>
              <h3 className="text-3xl font-bold text-yellow-500">
                41/100
              </h3>
            </div>
  
          </div>
  
          <div className="grid grid-cols-2 gap-6 mt-8">
  
            <div className="bg-black p-4 rounded-lg">
              <p className="text-gray-400">Action Items</p>
              <h3 className="text-2xl font-bold">
                4
              </h3>
            </div>
  
            <div className="bg-black p-4 rounded-lg">
              <p className="text-gray-400">No Owner Assigned</p>
              <h3 className="text-2xl font-bold text-red-400">
                2
              </h3>
            </div>
  
          </div>
  
          <div className="mt-8 bg-black rounded-lg p-4 border border-gray-800">
            <p className="text-green-400 font-semibold">
              AI Recommendation
            </p>
  
            <p className="text-gray-300 mt-2">
              Assign clear owners before ending meetings.
              38% of discussion time was spent revisiting unresolved topics.
            </p>
          </div>
  
        </div>
      </section>
    );
  }