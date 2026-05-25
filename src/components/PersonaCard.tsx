import React from 'react';

interface PersonaCardProps {
    name: string;
    age: string;
    occupation: string;
    quotes: string[];
    painPoints: string[];
    goals: string[];
    techSavvy: 'Low' | 'Medium' | 'High';
}

export const PersonaCard: React.FC<PersonaCardProps> = ({
    name,
    age,
    occupation,
    quotes,
    painPoints,
    goals,
    techSavvy,
}) => {
    const techColors = {
        Low: 'bg-muted-grey',
        Medium: 'bg-bronze',
        High: 'bg-sage',
    };

    return (
        <div className="bg-white border border-light-grey rounded-xl p-8 h-full">
            <div className="flex items-start justify-between mb-6">
                <div>
                    <h3 className="text-2xl font-bold text-graphite">{name}</h3>
                    <p className="text-muted-grey text-base mt-1">
                        {age} | {occupation}
                    </p>
                </div>
                <div className="flex flex-col items-end gap-2">
                    <span className="text-xs font-medium text-muted-grey uppercase tracking-wide">
                        Tech Savvy
                    </span>
                    <div className="flex gap-1">
                        {['Low', 'Medium', 'High'].map((level) => (
                            <div
                                key={level}
                                className={`w-6 h-2 rounded-full ${techSavvy === level ? techColors[level] : 'bg-light-grey'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {quotes.length > 0 && (
                <div className="mb-6 pb-6 border-b border-light-grey">
                    {quotes.map((quote, idx) => (
                        <p key={idx} className="text-muted-grey italic text-base">
                            "{quote}"
                        </p>
                    ))}
                </div>
            )}

            <div className="space-y-6">
                <div>
                    <h4 className="text-xs font-semibold text-muted-grey uppercase tracking-wide mb-3">
                        Pain Points
                    </h4>
                    <ul className="space-y-2">
                        {painPoints.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-graphite">
                                <div className="w-1 h-1 rounded-full bg-bronze mt-2 flex-shrink-0" />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-xs font-semibold text-muted-grey uppercase tracking-wide mb-3">
                        Goals
                    </h4>
                    <ul className="space-y-2">
                        {goals.map((goal, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-graphite">
                                <div className="w-1 h-1 rounded-full bg-sage mt-2 flex-shrink-0" />
                                <span>{goal}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};
