import React from 'react';
import { AlertTriangle, Shield, TrendingDown, Users, Zap, BarChart2 } from 'lucide-react';

const RisksMitigation: React.FC = () => {
    const risks = [
        {
            icon: AlertTriangle,
            category: 'Technical Risk',
            risk: 'Model accuracy below expectations',
            probability: 'Medium',
            impact: 'High',
            mitigation: 'Start with hybrid approach (manual override), continuous model improvement, phased rollout',
        },
        {
            icon: Users,
            category: 'Adoption Risk',
            risk: 'Low customer profile creation rate',
            probability: 'Medium',
            impact: 'High',
            mitigation: 'Incentivize profile completion, integrate seamlessly into checkout, demonstrate immediate value',
        },
        {
            icon: Shield,
            category: 'Privacy Risk',
            risk: 'Body measurement data concerns',
            probability: 'Low',
            impact: 'High',
            mitigation: 'Transparent data usage policy, anonymization, opt-in controls, regular audits',
        },
        {
            icon: TrendingDown,
            category: 'Business Risk',
            risk: 'Reduced basket size perception',
            probability: 'Low',
            impact: 'Medium',
            mitigation: 'Focus on quality over quantity metric, track CLV not basket size, customer satisfaction correlation',
        },
        {
            icon: BarChart2,
            category: 'Data Risk',
            risk: 'Insufficient training data',
            probability: 'Medium',
            impact: 'Medium',
            mitigation: 'Partner with external databases, synthetic data generation, progressive data enrichment',
        },
        {
            icon: Zap,
            category: 'Integration Risk',
            risk: 'Technical debt accumulation',
            probability: 'Medium',
            impact: 'Medium',
            mitigation: 'Modular architecture, API-first design, dedicated tech debt sprints every 4 weeks',
        },
    ];

    return (
        <section className="py-24 px-8 md:px-16 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <span className="caption-text text-bronze mb-6 block">SECTION 16</span>
                <h2 className="section-title text-graphite mb-12">
                    Risks & Mitigation Strategy
                </h2>

                <p className="body-text text-graphite mb-16 max-w-3xl">
                    Every strategic initiative carries risk. This section outlines potential challenges and the proactive measures to address them, ensuring resilient execution.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {risks.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                            <div key={idx} className="bg-warm-white rounded-xl p-8">
                                <div className="flex items-start gap-6 mb-6">
                                    <div className="w-12 h-12 rounded-lg bg-bronze/10 flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-5 h-5 text-bronze" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-xs font-medium text-muted-grey uppercase tracking-wide mb-1">
                                            {item.category}
                                        </div>
                                        <h3 className="text-lg font-semibold text-graphite">{item.risk}</h3>
                                    </div>
                                </div>

                                <div className="flex gap-4 mb-6">
                                    <div className="flex-1 bg-white rounded p-3 text-center">
                                        <div className="text-xs text-muted-grey mb-1">Probability</div>
                                        <div className="text-sm font-semibold text-graphite">{item.probability}</div>
                                    </div>
                                    <div className="flex-1 bg-white rounded p-3 text-center">
                                        <div className="text-xs text-muted-grey mb-1">Impact</div>
                                        <div className="text-sm font-semibold text-graphite">{item.impact}</div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg p-4">
                                    <div className="text-xs font-medium text-muted-grey uppercase tracking-wide mb-2">
                                        Mitigation
                                    </div>
                                    <p className="text-sm text-graphite leading-relaxed">{item.mitigation}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="bg-graphite text-white rounded-2xl p-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <div className="text-sm font-medium text-white/60 uppercase tracking-wide mb-4">
                                Contingency Planning
                            </div>
                            <p className="text-sm text-white/80 leading-relaxed">
                                Fallback to manual sizing for edge cases. 15% engineering buffer for technical challenges. Quarterly risk review meetings.
                            </p>
                        </div>

                        <div>
                            <div className="text-sm font-medium text-white/60 uppercase tracking-wide mb-4">
                                Early Warning Signals
                            </div>
                            <p className="text-sm text-white/80 leading-relaxed">
                                Weekly adoption rate monitoring. Daily accuracy tracking. Customer feedback analysis. Team velocity metrics.
                            </p>
                        </div>

                        <div>
                            <div className="text-sm font-medium text-white/60 uppercase tracking-wide mb-4">
                                Kill Criteria
                            </div>
                            <p className="text-sm text-white/80 leading-relaxed">
                                If 15% adoption not achieved in 8 weeks post-launch or accuracy stays below 70% for 4 consecutive weeks.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RisksMitigation;
