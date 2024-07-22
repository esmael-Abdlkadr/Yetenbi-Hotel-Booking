
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { date: '1-02-2024', Expense: 1200, Income: 2400 },
    { date: '15-02-2024', Expense: 1500, Income: 3200 },
    { date: '30-02-2024', Expense: 980, Income: 2900 },
];

const ExpenseChart = () => {
    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <LineChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="Expense" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="Income" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ExpenseChart;