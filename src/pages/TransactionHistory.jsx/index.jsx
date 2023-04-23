import { useEffect, useState } from 'react'
import { Container } from '../../components/Container'
import { FetchStatus, isLoaded, useFetch } from '../../hooks/useFetch'
import { MonthSummary } from './components/MonthSummary'
import { Spinner } from '../../components/Spinner'
import { useFormatTransactions } from './hooks/useFormatTransactions'
import { SummaryCard } from './components/SummaryCard'

export function TransactionHistory() {

    const [state, setState] = useState({
        groupedTransactions: {}
    })

    const { data: transaction, status } = useFetch('/transactions')

    useEffect(() => {
        if (status === FetchStatus.success) {
            setState(useFormatTransactions(transaction))
        }
    }, [status])

    return (
        <Container>
            {isLoaded(status) ? (
                <>
                    <h1>Transaction History</h1>
                    <div>
                        {
                            Object.keys(state.groupedTransactions).map((month) =>
                                <MonthSummary
                                    key={month}
                                    bonus={state.groupedTransactions[month].monthBonuses}
                                    price={state.groupedTransactions[month].monthPrice}
                                    month={month}
                                    transactions={state.groupedTransactions[month].transactions} />)
                        }
                    </div>
                    <SummaryCard title="Total Summary" bonus={state.totalBonuses} price={state.totalPrice} />
                </>) : (<Spinner />)}
        </Container>
    )
}





