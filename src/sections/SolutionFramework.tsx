import React from 'react';
import { BarChart } from '../components/BarChart';
import { FlowDiagram } from '../components/FlowDiagram';

const SolutionFramework: React.FC = () => {
    const solutionComponents = [
        { label: 'Fit Intelligence Engine', value: 35 },
        { label: 'Style Matching AI', value: 28 },
        { label: 'Visual Try-On', value: 22 },
        { label: 'Confidence Scoring', value: 15 },
    ];

    const impactMetrics = [
        {
            metric: 'Return Rate Reduction',
            current: '35%',
            projected: '21%',
            improvement: '40%',
        },
        {
            metric: 'First-Time Purchase Confidence',
            current: '42%',
            projected: '78%',
            improvement: '86%',
        },
        {
            metric: 'Average Basket Size',
            current: '3.7 items',
            projected: '2.8 items',
            improvement: 'Reduced bracket purchasing',
        },
    ];

    return (
        <section className="py-24 px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <span className="caption-text text-bronze mb-6 block">SECTION 09</span>
                <h2 className="section-title text-graphite mb-12">
                    Solution Framework
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
                    <div>
                        <p className="body-text text-graphite mb-12">
                            The solution framework integrates multiple intelligence layers to create a comprehensive style intelligence system that addresses the root causes of returns.
                        </p>

                        <h3 className="text-xl font-semibold text-graphite mb-6">
                            Component Impact Analysis
                        </h3>

                        <BarChart data={solutionComponents} horizontal unit="%" />
                    </div>

                    <div className="bg-white border border-light-grey rounded-2xl p-10">
                        <h3 className="subsection-title text-graphite mb-8 text-center">
                            Solution Architecture
                        </h3>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="flex-1 bg-bronze text-white rounded-lg p-4 text-center">
                                    <div className="text-sm font-semibold">Data Layer</div>
                                </div>
                                <div className="text-xs text-muted-grey">Body measurements, preferences, history</div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex-1 bg-sage text-white rounded-lg p-4 text-center">
                                    <div className="text-sm font-semibold">Intelligence Layer</div>
                                </div>
                                <div className="text-xs text-muted-grey">ML models for fit, style, visual prediction</div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex-1 bg-graphite text-white rounded-lg p-4 text-center">
                                    <div className="text-sm font-semibold">Experience Layer</div>
                                </div>
                                <div className="text-xs text-muted-grey">UI/UX, AR visualization, confidence scoring</div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex-1 bg-muted-grey text-white rounded-lg p-4 text-center">
                                    <div className="text-sm font-semibold">Integration Layer</div>
                                </div>
                                <div className="text-xs text-muted-grey">Product pages, checkout, post-purchase</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-16">
                    <h3 className="subsection-title text-graphite mb-8 text-center">
                        Expected Impact
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {impactMetrics.map((metric, idx) => (
                            <div key={idx} className="bg-white border border-light-grey rounded-lg p-8">
                                <div className="text-sm font-medium text-muted-grey uppercase tracking-wide mb-4">
                                    {metric.metric}
                                </div>

                                <div className="flex items-center justify-between mb-6">
                                    <div>
                                        <div className="text-xs text-muted-grey mb-1">Current</div>
                                        <div className="text-xl font-bold text-graphite">{metric.current}</div>
                                    </div>
                                    <div className="text-bronze">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="text-xs text-muted-grey mb-1">Projected</div>
                                        <div className="text-xl font-bold text-bronze">{metric.projected}</div>
                                    </div>
                                </div>

                                <div className="text-sm text-sage font-medium">{metric.improvement} improvement</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionFramework;
