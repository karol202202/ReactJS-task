import { SummaryCard } from "./SummaryCard"
import { TransactionItem } from "./TransactionItem"

export function MonthSummary({ month, transactions, bonus, price }) {
    return (<div>
        <h2>{month}</h2>
        <div>
            {transactions.map((transaction) =>
                <TransactionItem
                key={transaction.id}
                transaction={transaction} />
            )}
            <SummaryCard title="Month Summary" price={price} bonus={bonus} />
        </div>
    </div>)
}