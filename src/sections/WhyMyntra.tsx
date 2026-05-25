import React from 'react';
import { TrendingUp, Shield, Zap, Users, Target, Award } from 'lucide-react';

const WhyMyntra: React.FC = () => {
    const strategicReasons = [
        {
            icon: Target,
            title: 'Competitive Moat',
            description: 'First-mover advantage in AI-powered fashion intelligence. Competitors will need 18-24 months to replicate.',
        },
        {
            icon: Users,
            title: 'Customer Data Asset',
            description: 'Proprietary body measurement and fit preference data creates long-term strategic value.',
        },
        {
            icon: TrendingUp,
            title: 'Profitability Impact',
            description: 'Direct P&L impact of INR 2,309 Cr annual savings from return rate reduction.',
        },
        {
            icon: Shield,
            title: 'Customer Retention',
            description: 'Improved purchase confidence leads to higher repeat purchase rates and CLV.',
        },
        {
            icon: Zap,
            title: 'Operational Efficiency',
            description: 'Reduced warehouse capacity needs, lower logistics costs, better inventory turnover.',
        },
        {
            icon: Award,
            title: 'Brand Positioning',
            description: 'Technology-forward brand positioning enhances customer trust and market perception.',
        },
    ];

    const capabilities = [
        { capability: '20Cr+ customer base for data', advantage: 'Scale advantage' },
        { capability: 'Existing brand partnerships', advantage: 'Data access' },
        { capability: 'In-house tech team & AI capabilities', advantage: 'Execution speed' },
        { capability: 'Mobile-first user base', advantage: 'AR adoption ready' },
        { capability: 'Strong logistics network', advantage: 'Return data infrastructure' },
    ];

    return (
        <section className="py-24 px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <span className="caption-text text-bronze mb-6 block">SECTION 15</span>
                <h2 className="section-title text-graphite mb-12">
                    Why Myntra Should Build This
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
                    <div>
                        <p className="body-text text-graphite mb-12">
                            Myntra is uniquely positioned to lead this initiative. The platform has the scale, the data infrastructure, and the technical capabilities to make this vision a reality.
                        </p>

                        <div className="space-y-6">
                            {strategicReasons.map((reason, idx) => {
                                const Icon = reason.icon;
                                return (
                                    <div
                                        key={idx}
                                        className="flex items-start gap-6 p-6 bg-white border border-light-grey rounded-lg hover:shadow-md transition-shadow"
                                    >
                                        <div className="w-12 h-12 rounded-lg bg-bronze/10 flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-5 h-5 text-bronze" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-graphite mb-2">{reason.title}</h3>
                                            <p className="text-sm text-muted-grey leading-relaxed">{reason.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <div className="bg-white border border-light-grey rounded-2xl p-10">
                            <h3 className="subsection-title text-graphite mb-8 text-center">
                                Existing Capabilities
                            </h3>

                            <div className="space-y-6">
                                {capabilities.map((cap, idx) => (
                                    <div key={idx} className="flex items-center justify-between pb-6 border-b border-light-grey last:border-0 last:pb-0">
                                        <div className="flex items-center gap-6">
                                            <div className="w-8 h-8 rounded-full bg-sage text-white flex items-center justify-center text-sm font-bold">
                                                {idx + 1}
                                            </div>
                                            <span className="text-base font-medium text-graphite">{cap.capability}</span>
                                        </div>
                                        <span className="text-xs font-medium text-bronze uppercase tracking-wide">{cap.advantage}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 bg-bronze/5 border border-bronze/20 rounded-lg p-8">
                            <div className="flex items-center gap-4 mb-4">
                                <Target className="w-5 h-5 text-bronze" />
                                <div className="text-sm font-semibold text-bronze uppercase tracking-wide">
                                    Strategic Imperative
                                </div>
                            </div>
                            <p className="text-base text-graphite leading-relaxed">
                                Fashion e-commerce is entering an AI-first era. The platforms that master personalized fit and style will dominate. Myntra has the opportunity to lead.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyMyntra;
