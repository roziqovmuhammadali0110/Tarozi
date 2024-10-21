import React, { useState } from "react";

const ContractTable = () => {
  // Shartnoma ma'lumotlarini saqlash uchun state
  const [contracts, setContracts] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Random shartnoma ID generatsiya qilish
  const generateContractId = () => {
    return Math.floor(100000 + Math.random() * 900000); // 6 xonali random son
  };

  // Sanani formatlash: kun/oy/yil shaklida
  const formatDate = (date) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Date(date).toLocaleDateString("en-GB", options);
  };

  // Shartnoma qo'shish funksiyasi
  const addContract = () => {
    if (startDate && endDate) {
      const newContract = {
        id: generateContractId(),
        startDate: formatDate(startDate),
        endDate: formatDate(endDate)
      };
      setContracts([...contracts, newContract]); // Yangi shartnomani qo'shish
      setStartDate(""); // Inputlarni tozalash
      setEndDate("");
    } else {
      alert("Iltimos, boshlanish va tugash sanasini kiriting!");
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Contract Table</h2>

      {/* Boshlanish va tugash sanasi inputlari */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="start-date"
            className="block text-sm font-medium text-gray-700">
            Start Date:
          </label>
          <input
            type="date"
            id="start-date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        <div>
          <label
            htmlFor="end-date"
            className="block text-sm font-medium text-gray-700">
            End Date:
          </label>
          <input
            type="date"
            id="end-date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      {/* Shartnoma qo'shish tugmasi */}
      <button
        onClick={addContract}
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-300">
        Add Contract
      </button>

      {/* Shartnomalar ro'yxatini jadvalda ko'rsatish */}
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 p-2 text-left text-sm font-semibold text-gray-700">
                ID
              </th>
              <th className="border border-gray-300 p-2 text-left text-sm font-semibold text-gray-700">
                Start Date
              </th>
              <th className="border border-gray-300 p-2 text-left text-sm font-semibold text-gray-700">
                End Date
              </th>
            </tr>
          </thead>
          <tbody>
            {contracts.length === 0 ? (
              <tr>
                <td colSpan="3" className="text-center p-4 text-gray-500">
                  No contracts added yet.
                </td>
              </tr>
            ) : (
              contracts.map((contract) => (
                <tr key={contract.id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 p-2 text-sm">
                    {contract.id}
                  </td>
                  <td className="border border-gray-300 p-2 text-sm">
                    {contract.startDate}
                  </td>
                  <td className="border border-gray-300 p-2 text-sm">
                    {contract.endDate}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContractTable;
