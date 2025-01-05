import React from 'react';

const transactions = [
  {
    id: '1',
    type: 'Buyer',
    deliveryStatus: 'On the Way',
    progress: 65,
    items: 3,
    profit: 450.0,
    avgDeliveryTime: '2 days',
    date: '2024-03-15',
  },
];

const TransactionsTable = () => {
  return (
    <div className="bg-navy-800 rounded-lg overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="bg-navy-700">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Buyer/Seller</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Delivery Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Progress</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Items</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Gross Profit</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Avg. Delivery Time</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id} className="hover:bg-navy-700">
              <td className="px-6 py-4 text-sm text-white">{transaction.type}</td>
              <td className="px-6 py-4">
                <span
                  className={`inline-flex text-xs font-semibold rounded-full px-2 ${
                    transaction.deliveryStatus === 'Delivered'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {transaction.deliveryStatus}
                </span>
              </td>
              <td className="px-6 py-4">
                <div className="w-full bg-navy-900 rounded-full h-2.5">
                  <div
                    className="bg-emerald-500 h-2.5 rounded-full"
                    style={{ width: `${transaction.progress}%` }}
                  ></div>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-white">{transaction.items}</td>
              <td className="px-6 py-4 text-sm text-white">${transaction.profit.toFixed(2)}</td>
              <td className="px-6 py-4 text-sm text-white">{transaction.avgDeliveryTime}</td>
              <td className="px-6 py-4 text-sm text-white">{transaction.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
