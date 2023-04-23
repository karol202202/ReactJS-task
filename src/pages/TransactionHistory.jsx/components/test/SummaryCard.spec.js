import { render, screen } from "@testing-library/react";
import { SummaryCard } from "../SummaryCard";

test('render SummaryCard props', () => {
    
    render(<SummaryCard bonus={1000} price={2000} title={'test'}/>);


    const title = screen.getByText(/test/i);
    const price = screen.getByText(/2000/i);
    const bonus = screen.getByText(/1000/i);

    expect(title).toBeInTheDocument();
    expect(price).toBeInTheDocument();
    expect(bonus).toBeInTheDocument();
});
