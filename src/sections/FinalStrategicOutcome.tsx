import React from 'react';
import { CheckCircle, Target, TrendingUp, Users } from 'lucide-react';

const FinalStrategicOutcome: React.FC = () => {
    return (
        <section className="py-24 px-8 md:px-16 lg:px-24 bg-graphite text-white">
            <div className="max-w-7xl mx-auto">
                <span className="text-bronze text-sm font-medium uppercase tracking-widest mb-6 block">
                    SECTION 19
                </span>
                <h2 className="section-title text-white mb-16">
                    Strategic Outcome
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
                    <div>
                        <p className="text-2xl text-white/90 leading-relaxed font-light mb-12">
                            This case study presents not just a feature, but a strategic platform that transforms the fundamental economics of fashion e-commerce.
                        </p>

                        <div className="space-y-6">
                            {[
                                'Reduces return rates by 30-40%, saving INR 2,309 Cr annually',
                                'Increases customer lifetime value by 30% through improved confidence',
                                'Creates a competitive moat that takes 18-24 months to replicate',
                                'Establishes Myntra as the AI-first fashion platform',
                                'Builds proprietary data assets with long-term strategic value',
                            ].map((point, idx) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-bronze flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <CheckCircle className="w-3 h-3 text-white" />
                                    </div>
                                    <p className="text-lg text-white/80 leading-relaxed">{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white/5 rounded-lg p-8">
                            <Target className="w-8 h-8 text-bronze mb-4" />
                            <div className="text-xs font-medium text-white/60 uppercase tracking-wide mb-2">
                                Strategic Impact
                            </div>
                            <div className="text-3xl font-bold text-white mb-2">High</div>
                            <div className="text-sm text-white/60">Platform-defining initiative</div>
                        </div>

                        <div className="bg-white/5 rounded-lg p-8">
                            <TrendingUp className="w-8 h-8 text-sage mb-4" />
                            <div className="text-xs font-medium text-white/60 uppercase tracking-wide mb-2">
                                Financial ROI
                            </div>
                            <div className="text-3xl font-bold text-white mb-2">185%</div>
                            <div className="text-sm text-white/60">Year 1 return on investment</div>
                        </div>

                        <div className="bg-white/5 rounded-lg p-8">
                            <Users className="w-8 h-8 text-bronze mb-4" />
                            <div className="text-xs font-medium text-white/60 uppercase tracking-wide mb-2">
                                Customer Value
                            </div>
                            <div className="text-3xl font-bold text-white mb-2">+30%</div>
                            <div className="text-sm text-white/60">CLV improvement</div>
                        </div>

                        <div className="bg-white/5 rounded-lg p-8">
                            <svg className="w-8 h-8 text-sage mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div className="text-xs font-medium text-white/60 uppercase tracking-wide mb-2">
                                Time to Value
                            </div>
                            <div className="text-3xl font-bold text-white mb-2">16 wk</div>
                            <div className="text-sm text-white/60">From kickoff to launch</div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-12">
                    <div className="flex items-start justify-between flex-wrap gap-8">
                        <div>
                            <div className="text-bronze text-sm font-medium uppercase tracking-widest mb-4">
                                Investment
                            </div>
                            <div className="text-4xl font-bold text-white mb-2">INR 14.4 Cr</div>
                            <div className="text-sm text-white/60">3-year total investment</div>
                        </div>

                        <div>
                            <div className="text-bronze text-sm font-medium uppercase tracking-widest mb-4">
                                Net Savings
                            </div>
                            <div className="text-4xl font-bold text-sage mb-2">INR 6,927 Cr</div>
                            <div className="text-sm text-white/60">3-year cumulative savings</div>
                        </div>

                        <div className="bg-white/10 rounded-lg p-6">
                            <div className="text-center">
                                <div className="text-xs font-medium text-white/60 uppercase tracking-wide mb-4">
                                    Recommendation
                                </div>
                                <div className="text-lg font-bold text-white leading-tight mb-4">
                                    Proceed with development. Strategic alignment and ROI strongly support investment.
                                </div>
                                <button className="bg-bronze text-white px-8 py-3 rounded-lg font-semibold text-sm hover:bg-bronze/90 transition-colors">
                                    Initiate Discovery Phase
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalStrategicOutcome;
