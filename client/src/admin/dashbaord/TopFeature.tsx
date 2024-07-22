import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts";
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

// Example data for 30 days of a month
const chartData = Array.from({ length: 30 }, (_, i) => ({
    day: `Day ${i + 1}`,
    revenue: Math.floor(Math.random() * 500) + 100, // Random revenue data
}));

const chartConfig = {
    revenue: {
        label: "Revenue",
        color: "#2563eb",
    },
} satisfies ChartConfig;

const TopFeature = () => {
    return (
        <div>
            <ChartContainer config={chartConfig} className="min-h-[150px] w-[100%]">
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid vertical={false} strokeDasharray="3 3" />
                    <XAxis
                        dataKey="day"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                    />
                    <YAxis />
                    <Tooltip content={<ChartTooltipContent />} />
                    <Legend content={<ChartLegendContent />} />
                    <Bar dataKey="revenue" fill="var(--color-revenue)" radius={4} barSize={10} />
                </BarChart>
            </ChartContainer>
        </div>
    );
};

export default TopFeature;
