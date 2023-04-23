import { render, screen } from '@testing-library/react';
import { MonthSummary } from '../MonthSummary';


test('render MonthSummary props', () => {
    const mockTransaction = [  {
        id: 1, items: [
            { name: 'example', numberOfItems: 1, value: 22 },
        ], date: '11-04-2023'
    }]

    const mockMonthName = 'test month'
    render(<MonthSummary month={mockMonthName} transactions={mockTransaction} bonus={1000} price={2000} />);

    const title = screen.getByText(mockMonthName);
    const price = screen.getByText(/2000/i);
    const bonus = screen.getByText(/1000/i);

    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(bonus).toBeInTheDocument();
});


test('render transactions', () => {

    const mockTransactions = [
        {
            id: 1, items: [
                { name: 'example', numberOfItems: 1, value: 22 },
            ], date: '11-04-2023'
        },
        {
            id: 2, items: [
                { name: 'example2', numberOfItems: 1, value: 22 },
            ], date: '11-07-2023'
        },
    ]

    render(<MonthSummary month='test month' transactions={mockTransactions} bonus={null} price={null} />);

    const item1 = screen.getByText('example');
    const item2 = screen.getByText('example2');

    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
})