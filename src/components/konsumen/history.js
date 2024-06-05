import React, { useState, useEffect } from "react";

function History({ transactions: propsTransactions, onPayment }) {
  const [transactions, setTransactions] = useState(propsTransactions || []);

  useEffect(() => {
    const storedTransactions = localStorage.getItem("transactions");
    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }
  }, []);

  // Function to handle payment for a transaction
  const handlePayment = (transactionId) => {
    onPayment(transactionId); // Pass the transaction ID
    const updatedTransactions = transactions.map((transaction) =>
      transaction.id === transactionId
        ? { ...transaction, status: "Paid" }
        : transaction
    );
    setTransactions(updatedTransactions);
  };

  const hasTransactionsWaitingForPayment = transactions.some(
    (transaction) => transaction.status === "Waiting for Payment"
  );

  return (
    <div className="mt-16 pl-20 pr-20">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Transaction History
      </h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Item Name</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Category</th>
            {transactions.some(transaction => transaction.price) && <th className="px-4 py-2">Price</th>}
            {hasTransactionsWaitingForPayment && (
              <React.Fragment>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Actions</th>
              </React.Fragment>
            )}
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td className="border px-4 py-2">{transaction.itemName}</td>
              <td className="border px-4 py-2">{transaction.quantity}</td>
              <td className="border px-4 py-2">{transaction.category}</td>
              {transaction.price && <td className="border px-4 py-2">{transaction.price}</td>}
              {transaction.status === "Waiting for Payment" && (
                // Render payment button if status is "Waiting for Payment"
                <React.Fragment>
                  <td className="border px-4 py-2">{transaction.status}</td>
                  <td className="border px-4 py-2">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                      onClick={() => handlePayment(transaction.id)}
                    >
                      Pay
                    </button>
                  </td>
                </React.Fragment>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default History;
