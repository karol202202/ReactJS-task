import {useBonusCalculator} from '../../../hooks/useBonusCalculator'

export function useFormatTransactions(transactions) {
    let totalPrice = 0;
    let totalBonuses = 0;
    const groupedTransactions = transactions.reduce((previous, current) => {
        current = useBonusCalculator(current)
        const monthYear = current.date.substring(3)
        if (previous.hasOwnProperty(monthYear)) {
            previous[monthYear].transactions.push(current)
            previous[monthYear].monthPrice = previous[monthYear].monthPrice + current.price
            previous[monthYear].monthBonuses = previous[monthYear].monthBonuses + current.bonus
        } else {
            previous[monthYear] = {
                transactions: [current],
                monthPrice: current.price,
                monthBonuses: current.bonus
            }
        }
        totalPrice = totalPrice + current.price
        totalBonuses = totalBonuses + current.bonus
        return previous

    }, {})
    return { totalPrice, totalBonuses, groupedTransactions }
}