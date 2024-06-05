import React from "react";
import History from "../konsumen/history";

const PlayerList = ({ players, onDelete, onEdit, onAdd, onViewGudang, onViewHistory, onViewSupplier }) => {
  return (
    <div  className="gap-10">
    <div className="container mx-auto px-4 py-8">
      <button
          className="bg-gray-800 hover:bg-gray-500 text-white font-semibold py-3 px-6 rounded transition duration-300 ease-in-out transform hover:scale-105"
          onClick={onViewGudang}
        >
          View Gudang Stock
        </button>
        
      <button
          className="bg-gray-800 hover:bg-gray-500 text-white font-semibold py-3 px-6 rounded transition duration-300 ease-in-out transform hover:scale-105"
          onClick={onViewSupplier}
        >
          View Supplier 
        </button>
      <button
          className="bg-gray-800 hover:bg-gray-500 text-white font-semibold py-3 px-6 rounded transition duration-300 ease-in-out transform hover:scale-105"
          onClick={onViewHistory}
        >
          View Transaksi History 
        </button>
        </div>
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Data User</h2>

      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="w-full table-auto divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Username
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Password
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Role
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {players.map((player) => (
              <tr key={player.username} className="hover:bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                  {player.username}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {player.password}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  {player.role}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
                    onClick={() => onEdit(player.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => onDelete(player.role)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center mt-6 gap-4">
        <button
          className="bg-blue-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded transition duration-300 ease-in-out transform hover:scale-105"
          onClick={onAdd}
        >
          Add New Player
        </button>
      </div>

    </div>
  );
};

export default PlayerList;