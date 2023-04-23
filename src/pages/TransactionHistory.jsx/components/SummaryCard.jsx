import { Card } from "../../../components/Card";

export function SummaryCard({ title, bonus, price }) {
    return (
        <Card>
            <div>{title}</div>
            <p>Total cost: {price}</p>
            <p>Received bonus: {bonus}</p>
        </Card>)
}