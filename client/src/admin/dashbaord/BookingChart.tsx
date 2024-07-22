import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
    { name: 'single', value: 400 },
    { name: 'Double', value: 300 },
    { name: 'Delux', value: 100 },
    { name: 'suit', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const CustomLegend = () => (
    <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-8">
            {data.map((entry, index) => (
                <div key={index} className="flex items-center gap-2">
                    <span className="w-4 h-4" style={{ backgroundColor: COLORS[index % COLORS.length] }}></span>
                    <span>{`${entry.name}: ${entry.value}`}</span>
                </div>
            ))}
        </div>
    </div>
);
const BookingChart: React.FC = () => {
    return (
        <>
            <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((_entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
            <CustomLegend />
        </>
    );
};

export default BookingChart;