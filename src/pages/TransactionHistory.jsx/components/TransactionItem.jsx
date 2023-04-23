
import React from "react";
import './TransactionItem.css'


export function TransactionItem({ transaction }) {

  return (
    <div className="transaction">
      <div>Transaction id: {transaction.id}</div>
      <table className="table">
        <thead>
          <tr>
            <td>Items</td>
            <td>Amount</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
        {transaction.items.map((transaction) => {
          return (
            <tr key={transaction.name}>
              <td>{transaction.name}</td>
              <td>{transaction.numberOfItems}</td>
              <td>{transaction.value}</td>
            </tr>
          );
        })}
        
        </tbody>
        <tfoot>
          <tr>
           <td>Total cost:</td>
           <td></td>
           <td>{transaction.price}</td>
          </tr>
          <tr>
           <td>Received bonus:</td>
           <td></td>
           <td>{transaction.bonus}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
