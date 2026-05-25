import React from 'react';
import { PersonaCard } from '../components/PersonaCard';

const UserPersonas: React.FC = () => {
    const personas = [
        {
            name: 'Priya Sharma',
            age: '28',
            occupation: 'Marketing Manager, Bangalore',
            quotes: [
                'I always order 2-3 sizes and return what doesn\'t fit.',
                'I wish I could see how it would look on someone with my body type.',
            ],
            painPoints: [
                'Inconsistent sizing across brands',
                'No way to visualize fit before purchase',
                'High return processing time (5-7 days)',
                'Wasted effort in trying multiple sizes',
            ],
            goals: [
                'Find perfect fit on first try',
                'Reduce time spent on returns',
                'Discover styles that match her aesthetic',
                'Build a curated wardrobe',
            ],
            techSavvy: 'High' as const,
        },
        {
            name: 'Rajesh Kumar',
            age: '35',
            occupation: 'Software Engineer, Hyderabad',
            quotes: [
                'I don\'t know fashion, but I know what looks good on me. I need help finding it.',
            ],
            painPoints: [
                'Overwhelmed by choice',
                'Uncertain about style compatibility',
                'Relies on wife/friends for fashion advice',
                'Finds online shopping impersonal',
            ],
            goals: [
                'Get personalized recommendations',
                'Avoid fashion mistakes',
                'Quick and confident purchases',
                'Build a professional wardrobe',
            ],
            techSavvy: 'High' as const,
        },
        {
            name: 'Anita Desai',
            age: '52',
            occupation: 'Teacher, Ahmedabad',
            quotes: [
                'My body has changed, and I don\'t know what size I am anymore.',
            ],
            painPoints: [
                'Body changes after menopause, confused about size',
                'Unfamiliar with online size guides',
                'Finds technology intimidating',
                'Prefers physical trial experience',
            ],
            goals: [
                'Understand her current size',
                'Find age-appropriate styles',
                'Gain confidence in online shopping',
                'Easy-to-use interface',
            ],
            techSavvy: 'Low' as const,
        },
    ];

    return (
        <section className="py-24 px-8 md:px-16 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <span className="caption-text text-bronze mb-6 block">SECTION 06</span>
                <h2 className="section-title text-graphite mb-12">
                    User Personas
                </h2>

                <p className="body-text text-graphite mb-16 max-w-3xl">
                    Through 45 customer interviews and analysis of 12,000+ support tickets, we identified three primary persona archetypes who represent 80% of return behavior.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {personas.map((persona, idx) => (
                        <PersonaCard key={idx} {...persona} />
                    ))}
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-warm-white rounded-lg p-8 text-center">
                        <div className="text-4xl font-bold text-bronze mb-2">42%</div>
                        <div className="text-sm text-muted-grey">of returns are from multi-size bracket purchasing</div>
                    </div>

                    <div className="bg-warm-white rounded-lg p-8 text-center">
                        <div className="text-4xl font-bold text-sage mb-2">28%</div>
                        <div className="text-sm text-muted-grey">of returns are from style mismatch issues</div>
                    </div>

                    <div className="bg-warm-white rounded-lg p-8 text-center">
                        <div className="text-4xl font-bold text-graphite mb-2">30%</div>
                        <div className="text-sm text-muted-grey">of returns are from measurement uncertainty</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserPersonas;
