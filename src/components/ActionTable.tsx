export default function ActionTable() {
    return (
      <div className="bg-[#111] rounded-xl p-6 mt-6">
  
        <h2 className="text-green-400 text-xl font-bold mb-4">
          Action Items
        </h2>
  
        <table className="w-full">
  
          <thead>
            <tr className="text-left border-b border-gray-700">
              <th>Task</th>
              <th>Owner</th>
              <th>Status</th>
            </tr>
          </thead>
  
          <tbody>
  
            <tr>
              <td>Launch MVP</td>
              <td>Najmul</td>
              <td className="text-yellow-400">
                Pending
              </td>
            </tr>
  
            <tr>
              <td>Fix UI</td>
              <td>Sarah</td>
              <td className="text-green-400">
                Done
              </td>
            </tr>
  
            <tr>
              <td>Marketing Plan</td>
              <td>None</td>
              <td className="text-red-400">
                No Owner
              </td>
            </tr>
  
          </tbody>
  
        </table>
      </div>
    );
  }