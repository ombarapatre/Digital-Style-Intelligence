import React from 'react';
import { Activity, Sparkles, Palette, Ruler } from 'lucide-react';

const FashionEvaluationSystem: React.FC = () => {
    const evaluationCriteria = [
        {
            icon: Ruler,
            category: 'Fit Scoring',
            factors: [
                { name: 'Body Measurement Match', weight: '40%' },
                { name: 'Brand-Specific Sizing', weight: '25%' },
                { name: 'Fabric Stretch Factor', weight: '20%' },
                { name: 'Cut Compatibility', weight: '15%' },
            ],
        },
        {
            icon: Palette,
            category: 'Style Matching',
            factors: [
                { name: 'Aesthetic Preference', weight: '35%' },
                { name: 'Occasion Appropriateness', weight: '25%' },
                { name: 'Body Type Compatibility', weight: '25%' },
                { name: 'Current Wardrobe Fit', weight: '15%' },
            ],
        },
        {
            icon: Activity,
            category: 'Comfort Prediction',
            factors: [
                { name: 'Fabric Breathability', weight: '30%' },
                { name: 'Movement Freedom', weight: '30%' },
                { name: 'Weather Suitability', weight: '25%' },
                { name: 'All-Day Wearability', weight: '15%' },
            ],
        },
        {
            icon: Sparkles,
            category: 'Visual Appeal',
            factors: [
                { name: 'Color Match', weight: '30%' },
                { name: 'Body Visualization', weight: '35%' },
                { name: 'Drape Prediction', weight: '20%' },
                { name: 'Photograph Accuracy', weight: '15%' },
            ],
        },
    ];

    return (
        <section className="py-24 px-8 md:px-16 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <span className="caption-text text-bronze mb-6 block">SECTION 10</span>
                <h2 className="section-title text-graphite mb-12">
                    Fashion Evaluation System
                </h2>

                <p className="body-text text-graphite mb-16 max-w-3xl">
                    The evaluation system uses a multi-factor scoring framework that considers objective fit metrics, subjective style preferences, and contextual appropriateness to generate a comprehensive recommendation score.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {evaluationCriteria.map((criteria, idx) => {
                        const Icon = criteria.icon;
                        return (
                            <div key={idx} className="bg-warm-white rounded-xl p-8">
                                <div className="flex items-start gap-6 mb-8">
                                    <div className="w-14 h-14 rounded-xl bg-bronze text-white flex items-center justify-center flex-shrink-0">
                                        <Icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-graphite">{criteria.category}</h3>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {criteria.factors.map((factor, fIdx) => (
                                        <div key={fIdx} className="flex items-center justify-between">
                                            <span className="text-sm text-muted-grey">{factor.name}</span>
                                            <div className="flex items-center gap-2">
                                                <div className="w-32 h-2 bg-light-grey rounded-full overflow-hidden">
                                                    <div
                                                        className="h-full bg-bronze rounded-full"
                                                        style={{ width: factor.weight }}
                                                    />
                                                </div>
                                                <span className="text-xs font-semibold text-graphite w-10 text-right">
                                                    {factor.weight}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="bg-graphite text-white rounded-2xl p-12">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                        <div className="md:col-span-2">
                            <h3 className="text-2xl font-bold mb-4">Final Recommendation Score</h3>
                            <p className="text-base text-white/80 leading-relaxed">
                                Combines fit, style, comfort, and visual factors into a single actionable score that guides purchase decisions.
                            </p>
                        </div>

                        <div className="md:col-span-3">
                            <div className="bg-white/10 rounded-xl p-8">
                                <div className="grid grid-cols-4 gap-6">
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-bronze mb-2">95+</div>
                                        <div className="text-xs text-white/60 uppercase tracking-wide">Excellent Match</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-sage mb-2">85-94</div>
                                        <div className="text-xs text-white/60 uppercase tracking-wide">Good Match</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-muted-grey mb-2">70-84</div>
                                        <div className="text-xs text-white/60 uppercase tracking-wide">Acceptable</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold text-graphite mb-2">&lt;70</div>
                                        <div className="text-xs text-white/60 uppercase tracking-wide">High Risk</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FashionEvaluationSystem;
