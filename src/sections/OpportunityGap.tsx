import React from 'react';
import { ArrowRight } from 'lucide-react';

const OpportunityGap: React.FC = () => {
    const competitorGaps = [
        {
            feature: 'Size Recommendation',
            myntra: 'Basic',
            ajio: 'None',
            amazon: 'Basic',
            opportunity: 'AI-powered fit analysis',
        },
        {
            feature: 'Body Measurement',
            myntra: 'Manual',
            ajio: 'None',
            amazon: 'None',
            opportunity: 'AR-based measurement',
        },
        {
            feature: 'Style Matching',
            myntra: 'None',
            ajio: 'Basic',
            amazon: 'None',
            opportunity: 'AI style compatibility score',
        },
        {
            feature: 'Fit Visualization',
            myntra: 'None',
            ajio: 'None',
            amazon: 'None',
            opportunity: '3D body-aware preview',
        },
        {
            feature: 'Return Prediction',
            myntra: 'None',
            ajio: 'None',
            amazon: 'Low',
            opportunity: 'Proactive intervention',
        },
    ];

    return (
        <section className="py-24 px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <span className="caption-text text-bronze mb-6 block">SECTION 05</span>
                <h2 className="section-title text-graphite mb-12">
                    Opportunity Gap Analysis
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
                    <div>
                        <p className="body-text text-graphite mb-12">
                            No player in the Indian fashion e-commerce market has built a comprehensive style intelligence system. This creates a significant competitive moat for the first mover.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-bronze text-white flex items-center justify-center">
                                    <span className="text-lg font-bold">1</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-graphite mb-2">
                                        First-Mover Advantage
                                    </h4>
                                    <p className="text-base text-muted-grey">
                                        Building a proprietary dataset on body measurements, fit preferences, and style choices creates long-term competitive advantage.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sage text-white flex items-center justify-center">
                                    <span className="text-lg font-bold">2</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-graphite mb-2">
                                        Network Effects
                                    </h4>
                                    <p className="text-base text-muted-grey">
                                        Better recommendations lead to fewer returns, which leads to better inventory management and profitability.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-graphite text-white flex items-center justify-center">
                                    <span className="text-lg font-bold">3</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-graphite mb-2">
                                        Data Moat
                                    </h4>
                                    <p className="text-base text-muted-grey">
                                        Each user interaction improves the system, making it increasingly difficult for competitors to replicate.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="bg-white border border-light-grey rounded-lg overflow-hidden">
                            <div className="grid grid-cols-5 gap-4 p-6 bg-warm-white border-b border-light-grey text-xs font-semibold text-muted-grey uppercase tracking-wide">
                                <div>Feature</div>
                                <div>Myntra</div>
                                <div>AJIO</div>
                                <div>Amazon</div>
                                <div>Opportunity</div>
                            </div>

                            <div className="divide-y divide-light-grey">
                                {competitorGaps.map((gap, idx) => (
                                    <div key={idx} className="grid grid-cols-5 gap-4 p-6 items-center">
                                        <div className="text-sm font-medium text-graphite">{gap.feature}</div>
                                        <div className="text-xs text-muted-grey">{gap.myntra}</div>
                                        <div className="text-xs text-muted-grey">{gap.ajio}</div>
                                        <div className="text-xs text-muted-grey">{gap.amazon}</div>
                                        <div className="text-xs text-bronze font-medium">{gap.opportunity}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white border border-light-grey rounded-lg p-8">
                        <div className="text-sm font-medium text-muted-grey uppercase tracking-wide mb-4">
                            Market Gap
                        </div>
                        <div className="text-xl font-semibold text-graphite mb-3">
                            No comprehensive style intelligence system in Indian market
                        </div>
                        <ArrowRight className="w-5 h-5 text-bronze" />
                    </div>

                    <div className="bg-white border border-light-grey rounded-lg p-8">
                        <div className="text-sm font-medium text-muted-grey uppercase tracking-wide mb-4">
                            Customer Gap
                        </div>
                        <div className="text-xl font-semibold text-graphite mb-3">
                            62% of customers cite &ldquo;uncertain fit&rdquo; as purchase barrier
                        </div>
                        <ArrowRight className="w-5 h-5 text-bronze" />
                    </div>

                    <div className="bg-white border border-light-grey rounded-lg p-8">
                        <div className="text-sm font-medium text-muted-grey uppercase tracking-wide mb-4">
                            Platform Gap
                        </div>
                        <div className="text-xl font-semibold text-graphite mb-3">
                            Product information insufficient for confident decisions
                        </div>
                        <ArrowRight className="w-5 h-5 text-bronze" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OpportunityGap;
