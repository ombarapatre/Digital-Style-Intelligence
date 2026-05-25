import React from 'react';

interface MetricCardProps {
    value: string;
    label: string;
    sublabel?: string;
    accent?: 'bronze' | 'sage' | 'graphite';
    size?: 'normal' | 'large';
}

export const MetricCard: React.FC<MetricCardProps> = ({
    value,
    label,
    sublabel,
    accent = 'graphite',
    size = 'normal',
}) => {
    const accentColors = {
        bronze: 'text-bronze',
        sage: 'text-sage',
        graphite: 'text-graphite',
    };

    return (
        <div className="flex flex-col">
            <span
                className={`font-bold tracking-tight leading-none ${size === 'large' ? 'text-6xl md:text-7xl lg:text-8xl' : 'text-5xl md:text-6xl'
                    } ${accentColors[accent]}`}
            >
                {value}
            </span>
            <span className="mt-4 text-lg font-medium text-muted-grey">{label}</span>
            {sublabel && <span className="mt-1 text-sm text-muted-grey">{sublabel}</span>}
        </div>
    );
};
