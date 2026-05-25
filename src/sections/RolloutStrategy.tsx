import React from 'react';
import { Rocket, Target, TrendingUp, CheckCircle, Zap } from 'lucide-react';

const RolloutStrategy: React.FC = () => {
    const phases = [
        {
            phase: 'Phase 1',
            duration: 'Weeks 1-2',
            title: 'Internal Alpha',
            scope: 'Internal Myntra employees (500 users)',
            goals: ['Validate core functionality', 'Test measurement accuracy', 'Gather qualitative feedback'],
            success: '80% accuracy threshold',
        },
        {
            phase: 'Phase 2',
            duration: 'Weeks 3-6',
            title: 'Beta Testing',
            scope: 'High-value customers (5,000 users)',
            goals: ['Stress-test the system', 'Refine recommendation algorithm', 'Measure user behavior'],
            success: '70% adoption rate',
        },
        {
            phase: 'Phase 3',
            duration: 'Weeks 7-10',
            title: 'Staged Rollout',
            scope: '10% of new users (platform-wide)',
            goals: ['A/B test against control', 'Measure return rate impact', 'Optimize UI/UX'],
            success: '25% return rate reduction',
        },
        {
            phase: 'Phase 4',
            duration: 'Weeks 11-16',
            title: 'Platform Launch',
            scope: '100% rollout in phases',
            goals: ['Full feature integration', 'Marketing campaign', 'Continuous optimization'],
            success: '35% return rate reduction',
        },
    ];

    return (
        <section className="py-24 px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <span className="caption-text text-bronze mb-6 block">SECTION 17</span>
                <h2 className="section-title text-graphite mb-12">
                    Rollout Strategy
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
                    <div>
                        <p className="body-text text-graphite mb-12">
                            A phased approach minimizes risk while allowing for iterative learning. Each phase has clear success criteria that must be met before proceeding to the next stage.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-sage text-white flex items-center justify-center flex-shrink-0">
                                    <Rocket className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-graphite mb-2">Fail Fast, Learn Faster</h4>
                                    <p className="text-sm text-muted-grey leading-relaxed">
                                        Each phase includes kill criteria. If metrics don&apos;t meet thresholds, we pivot or pause before scaling.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-bronze text-white flex items-center justify-center flex-shrink-0">
                                    <Target className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-graphite mb-2">User-Centric Validation</h4>
                                    <p className="text-sm text-muted-grey leading-relaxed">
                                        Customer feedback is integrated at every phase, ensuring the product solves real problems.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-graphite text-white flex items-center justify-center flex-shrink-0">
                                    <TrendingUp className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-graphite mb-2">Continuous Optimization</h4>
                                    <p className="text-sm text-muted-grey leading-relaxed">
                                        Weekly retrospectives and model retraining ensure we learn from every user interaction.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="bg-white border border-light-grey rounded-2xl overflow-hidden">
                            {phases.map((phase, idx) => (
                                <div
                                    key={idx}
                                    className={`p-6 ${idx < phases.length - 1 ? 'border-b border-light-grey' : ''}`}
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="text-xs font-semibold text-bronze uppercase tracking-wide">
                                                    {phase.phase}
                                                </div>
                                                <div className="text-xs text-muted-grey">{phase.duration}</div>
                                            </div>
                                            <h3 className="text-lg font-semibold text-graphite">{phase.title}</h3>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-sage/10 text-sage flex items-center justify-center flex-shrink-0">
                                            <Zap className="w-4 h-4" />
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="text-xs font-medium text-muted-grey uppercase tracking-wide">
                                            Scope: <span className="normal-case text-graphite">{phase.scope}</span>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {phase.goals.map((goal, gIdx) => (
                                                <div
                                                    key={gIdx}
                                                    className="text-xs bg-warm-white px-3 py-1 rounded-full text-muted-grey"
                                                >
                                                    {goal}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-2 text-xs">
                                            <CheckCircle className="w-3 h-3 text-sage" />
                                            <span className="text-sage font-medium">Success: {phase.success}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-warm-white rounded-2xl p-12">
                    <h3 className="subsection-title text-graphite mb-8 text-center">
                        Rollback & Failsafe Mechanisms
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="bg-white rounded-lg p-8">
                            <div className="text-sm font-medium text-graphite mb-3">Feature Flags</div>
                            <p className="text-xs text-muted-grey">
                                Instant disable capability for any component showing adverse metrics
                            </p>
                        </div>

                        <div className="bg-white rounded-lg p-8">
                            <div className="text-sm font-medium text-graphite mb-3">Control Groups</div>
                            <p className="text-xs text-muted-grey">
                                Always maintain 5% control group for A/B comparison during rollout
                            </p>
                        </div>

                        <div className="bg-white rounded-lg p-8">
                            <div className="text-sm font-medium text-graphite mb-3">Data Fallback</div>
                            <p className="text-xs text-muted-grey">
                                Original size charts and recommendations available as backup at all times
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RolloutStrategy;
