import React from 'react';

interface SectionHeaderProps {
    number?: string;
    title: string;
    subtitle?: string;
    align?: 'left' | 'center';
    size?: 'large' | 'medium' | 'small';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
    number,
    title,
    subtitle,
    align = 'left',
    size = 'medium',
}) => {
    const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';

    const titleSizes = {
        large: 'text-5xl md:text-6xl lg:text-7xl',
        medium: 'text-4xl md:text-5xl lg:text-6xl',
        small: 'text-3xl md:text-4xl',
    };

    return (
        <div className={`flex flex-col ${alignment} mb-16`}>
            {number && (
                <span className="caption-text text-bronze mb-4 tracking-widest">{number}</span>
            )}
            <h2 className={`font-bold leading-tight ${titleSizes[size]} text-graphite text-balance`}>
                {title}
            </h2>
            {subtitle && (
                <p className="mt-6 text-xl md:text-2xl text-muted-grey max-w-3xl leading-relaxed">
                    {subtitle}
                </p>
            )}
        </div>
    );
};
