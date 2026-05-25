import React from 'react';
import { Check, AlertTriangle, Clock, Zap } from 'lucide-react';

const MVPScope: React.FC = () => {
    const inScope = [
        { feature: 'Manual body measurement input', complexity: 'Low' },
        { feature: 'Basic fit prediction algorithm', complexity: 'Medium' },
        { feature: 'Brand-specific size translation', complexity: 'Low' },
        { feature: 'Fit score on product pages', complexity: 'Medium' },
        { feature: 'Size recommendation widget', complexity: 'Low' },
        { feature: 'Basic style preference quiz', complexity: 'Low' },
        { feature: 'Return prediction scoring', complexity: 'High' },
        { feature: 'Checkout confidence alert', complexity: 'Medium' },
    ];

    const outOfScope = [
        { feature: 'AR body measurement', reason: 'Phase 2' },
        { feature: '3D visualization', reason: 'Phase 3' },
        { feature: 'AI style recommendations', reason: 'Phase 2' },
        { feature: 'Social features', reason: 'Phase 3' },
        { feature: 'Brand partnership APIs', reason: 'Phase 2' },
    ];

    const timeline = [
        { phase: 'Discovery & Design', weeks: '2', tasks: 'User research, data analysis, wireframes' },
        { phase: 'Model Development', weeks: '4', tasks: 'ML model training, brand fit data integration' },
        { phase: 'Backend Development', weeks: '3', tasks: 'API development, database setup, scoring engine' },
        { phase: 'Frontend Integration', weeks: '3', tasks: 'Product page widgets, checkout integration' },
        { phase: 'Testing & Iteration', weeks: '2', tasks: 'A/B testing, user feedback, optimization' },
        { phase: 'Rollout', weeks: '2', tasks: 'Staged rollout, monitoring, documentation' },
    ];

    return (
        <section className="py-24 px-8 md:px-16 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <span className="caption-text text-bronze mb-6 block">SECTION 12</span>
                <h2 className="section-title text-graphite mb-12">
                    MVP Scope Definition
                </h2>

                <p className="body-text text-graphite mb-16 max-w-3xl">
                    The MVP focuses on fit intelligence as the core value proposition. This targeted approach allows us to validate the hypothesis that better fit prediction reduces returns before investing in advanced features.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-8 h-8 rounded-full bg-sage text-white flex items-center justify-center">
                                <Check className="w-4 h-4" />
                            </div>
                            <h3 className="subsection-title text-graphite">In Scope</h3>
                        </div>

                        <div className="space-y-4">
                            {inScope.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-between p-4 bg-warm-white rounded-lg"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 bg-sage rounded-full" />
                                        <span className="text-sm text-graphite">{item.feature}</span>
                                    </div>
                                    <span
                                        className={`text-xs font-medium px-3 py-1 rounded-full ${item.complexity === 'Low'
                                            ? 'bg-sage/10 text-sage'
                                            : item.complexity === 'High'
                                                ? 'bg-bronze/10 text-bronze'
                                                : 'bg-muted-grey/10 text-muted-grey'
                                            }`}
                                    >
                                        {item.complexity}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-8 h-8 rounded-full bg-muted-grey text-white flex items-center justify-center">
                                <AlertTriangle className="w-4 h-4" />
                            </div>
                            <h3 className="subsection-title text-graphite">Out of Scope</h3>
                        </div>

                        <div className="space-y-4">
                            {outOfScope.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-between p-4 bg-warm-white rounded-lg border-l-4 border-muted-grey"
                                >
                                    <span className="text-sm text-muted-grey">{item.feature}</span>
                                    <span className="text-xs font-medium text-muted-grey">{item.reason}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-graphite rounded-2xl p-12">
                    <div className="flex items-center gap-3 mb-8">
                        <Clock className="w-6 h-6 text-bronze" />
                        <h3 className="subsection-title text-white">16-Week Implementation Timeline</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {timeline.map((phase, idx) => (
                            <div key={idx} className="bg-white/5 rounded-lg p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-sm font-medium text-white/60">Week {phase.weeks}</span>
                                    <Zap className="w-4 h-4 text-bronze" />
                                </div>
                                <h4 className="text-base font-semibold text-white mb-2">{phase.phase}</h4>
                                <p className="text-xs text-white/60">{phase.tasks}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MVPScope;
