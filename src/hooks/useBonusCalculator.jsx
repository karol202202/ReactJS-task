import { firstBonusCountFrom, firstBonusPointsValue, secondBonusCountFrom, secondBonusCountTo, secondBonusPointsValue } from "../core/BonusesConfig";

export function useBonusCalculator(transaction) {
    let price = 0;
    let bonus = 0;
    transaction.items.forEach((order) => {
        price = price + (order.value)
    });
    bonus = countFirstBonus(price) + countSecondBonus(price);
    return { ...transaction, price, bonus }
}

function countFirstBonus(sum) {
    if (sum < firstBonusCountFrom) {
        return 0;
    }
    return (sum - firstBonusCountFrom) * firstBonusPointsValue
}

function countSecondBonus(sum) {

    if (sum <= secondBonusCountFrom) {
        return 0;
    }
    if (secondBonusCountTo > sum && sum > secondBonusCountFrom) {
        return (sum - secondBonusCountFrom) * secondBonusPointsValue
    }
    if (sum > secondBonusCountFrom) {
        return secondBonusCountFrom * secondBonusPointsValue
    }
}