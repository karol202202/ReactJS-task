import { useBonusCalculator } from "./useBonusCalculator";

test('should count two bonuses', () => {

    const mockTransactions =  {
        items: [
            { name: 'example2', numberOfItems: 1, value: 20 },
            { name: 'example1', numberOfItems: 1, value: 100 },
        ]
    }

    const {price, bonus} = useBonusCalculator(mockTransactions)

    expect(price).toEqual(120);
    expect(bonus).toEqual(90);
})

test('should count only one bonus', () => {

    const mockTransactions =  {
        items: [
            { name: 'example2', numberOfItems: 1, value: 10 },
            { name: 'example1', numberOfItems: 1, value: 55 },
        ]
    }

    const {price, bonus} = useBonusCalculator(mockTransactions)

    expect(price).toEqual(65);
    expect(bonus).toEqual(15);
})


test('should not count bonuses', () => {

    const mockTransactions =  {
        items: [
            { name: 'example2', numberOfItems: 1, value: 10 },
        ]
    }

    const {price, bonus} = useBonusCalculator(mockTransactions)

    expect(price).toEqual(10);
    expect(bonus).toEqual(0);
})