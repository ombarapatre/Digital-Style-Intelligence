import React from 'react';

interface QuadrantDiagramProps {
    title?: string;
    quadrants: Array<{
        position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
        label: string;
        description?: string;
        accent?: boolean;
    }>;
    xAxis?: { left: string; right: string };
    yAxis?: { top: string; bottom: string };
}

export const QuadrantDiagram: React.FC<QuadrantDiagramProps> = ({
    title,
    quadrants,
    xAxis,
    yAxis,
}) => {
    const getQuadrant = (position: string) => quadrants.find((q) => q.position === position);

    const quadrantClasses = {
        'top-left': 'col-start-1 row-start-1 border-r border-b',
        'top-right': 'col-start-2 row-start-1 border-b',
        'bottom-left': 'col-start-1 row-start-2 border-r',
        'bottom-right': 'col-start-2 row-start-2',
    };

    return (
        <div className="w-full">
            {title && (
                <h3 className="text-lg font-semibold text-graphite mb-8 text-center">{title}</h3>
            )}

            {yAxis && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-xs font-medium text-muted-grey uppercase tracking-widest">
                    {yAxis.top}
                </div>
            )}

            <div className="grid grid-cols-2 grid-rows-2 border border-light-grey rounded-lg overflow-hidden">
                {quadrants.map((quadrant) => (
                    <div
                        key={quadrant.position}
                        className={`${quadrantClasses[quadrant.position]} p-6 ${quadrant.accent ? 'bg-bronze bg-opacity-5' : 'bg-white'
                            }`}
                    >
                        <h4 className="text-base font-semibold text-graphite mb-1">{quadrant.label}</h4>
                        {quadrant.description && (
                            <p className="text-sm text-muted-grey">{quadrant.description}</p>
                        )}
                    </div>
                ))}
            </div>

            {xAxis && (
                <div className="flex justify-between mt-4 text-xs font-medium text-muted-grey uppercase tracking-widest">
                    <span>{xAxis.left}</span>
                    <span>{xAxis.right}</span>
                </div>
            )}
        </div>
    );
};
