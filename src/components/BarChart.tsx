import React from 'react';

interface BarChartProps {
    data: Array<{ label: string; value: number; color?: string }>;
    maxValue?: number;
    unit?: string;
    horizontal?: boolean;
}

export const BarChart: React.FC<BarChartProps> = ({
    data,
    maxValue,
    unit = '%',
    horizontal = true,
}) => {
    const max = maxValue || Math.max(...data.map((d) => d.value));

    if (horizontal) {
        return (
            <div className="w-full space-y-4">
                {data.map((item, index) => {
                    const width = (item.value / max) * 100;
                    const barColor = item.color || (index === 0 ? '#A67C52' : '#C7C7CC');

                    return (
                        <div key={index} className="flex items-center gap-6">
                            <div className="w-32 text-sm font-medium text-muted-grey">{item.label}</div>
                            <div className="flex-1 h-8 bg-light-grey rounded-sm overflow-hidden">
                                <div
                                    className="h-full rounded-sm transition-all duration-700"
                                    style={{ width: `${width}%`, backgroundColor: barColor }}
                                />
                            </div>
                            <div className="w-16 text-right text-lg font-semibold text-graphite">
                                {item.value}
                                {unit}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }

    return (
        <div className="flex items-end gap-6 h-64">
            {data.map((item, index) => {
                const height = (item.value / max) * 100;
                const barColor = item.color || (index === 0 ? '#A67C52' : '#C7C7CC');

                return (
                    <div key={index} className="flex flex-col items-center flex-1">
                        <div className="w-full bg-light-grey rounded-t-sm overflow-hidden flex-1">
                            <div
                                className="w-full rounded-t-sm transition-all duration-700"
                                style={{ height: `${height}%`, backgroundColor: barColor }}
                            />
                        </div>
                        <div className="mt-4 text-sm font-medium text-muted-grey text-center">{item.label}</div>
                        <div className="mt-1 text-lg font-semibold text-graphite">
                            {item.value}
                            {unit}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
