import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FlowDiagramProps {
    steps: Array<{ title: string; description: string }>;
    layout?: 'horizontal' | 'vertical';
    numbered?: boolean;
}

export const FlowDiagram: React.FC<FlowDiagramProps> = ({
    steps,
    layout = 'horizontal',
    numbered = true,
}) => {
    if (layout === 'vertical') {
        return (
            <div className="space-y-6">
                {steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-6">
                        {numbered && (
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-bronze text-white flex items-center justify-center text-lg font-bold">
                                {index + 1}
                            </div>
                        )}
                        <div className="flex-1 pt-2">
                            <h4 className="text-xl font-semibold text-graphite mb-2">{step.title}</h4>
                            <p className="text-base text-muted-grey">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="flex items-start gap-4 overflow-x-auto pb-4">
            {steps.map((step, index) => (
                <React.Fragment key={index}>
                    <div className="flex-1 min-w-48">
                        <div className="bg-white border border-light-grey rounded-lg p-6 h-full">
                            {numbered && (
                                <div className="w-8 h-8 rounded-full bg-bronze text-white flex items-center justify-center text-sm font-bold mb-4">
                                    {index + 1}
                                </div>
                            )}
                            <h4 className="text-lg font-semibold text-graphite mb-2">{step.title}</h4>
                            <p className="text-sm text-muted-grey">{step.description}</p>
                        </div>
                    </div>
                    {index < steps.length - 1 && (
                        <div className="flex items-center h-32">
                            <ArrowRight className="w-5 h-5 text-medium-grey" />
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};
