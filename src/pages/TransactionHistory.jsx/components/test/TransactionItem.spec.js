import { render, screen } from "@testing-library/react";
import { SummaryCard } from "../SummaryCard";
import { TransactionItem } from "../TransactionItem";

test('render TranscationItem props', () => {
    const mockTransactionItem = {
        id: 1,
        items: [
            {
                name: 'productA',
                numberOfItems: 4,
                value: 88
            },
            {
                name: 'productB',
                numberOfItems: 2,
                value: 11
            }],
        price: 188,
        bonus: 226
    }


    render(<TransactionItem transaction={mockTransactionItem} />);


    const productA = screen.getByText(/productA/i);
    const productB = screen.getByText(/productB/i);

    expect(productA).toBeInTheDocument();
    expect(productB).toBeInTheDocument();
});
