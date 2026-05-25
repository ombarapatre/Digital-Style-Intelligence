import React from 'react';
import { Target, TrendingUp, Users, Zap, BarChart2, Shield } from 'lucide-react';

const SuccessMetrics: React.FC = () => {
    const metrics = [
        {
            icon: BarChart2,
            category: 'Primary Metrics',
            items: [
                { name: 'Return Rate Reduction', target: '30-40%', measurement: 'Monthly cohort analysis' },
                { name: 'First-Attempt Fit Success', target: '75%', measurement: 'Post-delivery feedback' },
                { name: 'Size Recommendation Accuracy', target: '85%', measurement: 'A/B testing on product pages' },
            ],
        },
        {
            icon: Users,
            category: 'Customer Metrics',
            items: [
                { name: 'Profile Creation Rate', target: '40%', measurement: 'New user onboarding' },
                { name: 'Recommendation Acceptance', target: '60%', measurement: 'Size widget interaction' },
                { name: 'Customer Satisfaction (NPS)', target: '+15 pts', measurement: 'Quarterly survey' },
            ],
        },
        {
            icon: Zap,
            category: 'Efficiency Metrics',
            items: [
                { name: 'Average Return Processing Time', target: '-25%', measurement: 'Logistics dashboard' },
                { name: 'Bracket Purchase Reduction', target: '50%', measurement: 'Basket analysis' },
                { name: 'Warehouse Return Capacity', target: '-30%', measurement: 'Operations metrics' },
            ],
        },
        {
            icon: Shield,
            category: 'Confidence Metrics',
            items: [
                { name: 'High Confidence Purchases', target: '65%', measurement: 'Score distribution' },
                { name: 'Return Prediction Accuracy', target: '80%', measurement: 'Model performance' },
                { name: 'Customer Self-Service', target: '70%', measurement: 'Support ticket analysis' },
            ],
        },
    ];

    return (
        <section className="py-24 px-8 md:px-16 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <span className="caption-text text-bronze mb-6 block">SECTION 14</span>
                <h2 className="section-title text-graphite mb-12">
                    Success Metrics Framework
                </h2>

                <p className="body-text text-graphite mb-16 max-w-3xl">
                    A comprehensive measurement framework ensures we track both leading and lagging indicators, enabling rapid iteration and optimization.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                    {metrics.map((category, idx) => {
                        const Icon = category.icon;
                        return (
                            <div key={idx} className="bg-warm-white rounded-xl p-8">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-lg bg-bronze text-white flex items-center justify-center">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-graphite">{category.category}</h3>
                                </div>

                                <div className="space-y-6">
                                    {category.items.map((item, iIdx) => (
                                        <div key={iIdx} className="flex items-start gap-6">
                                            <div className="flex-1">
                                                <div className="text-sm font-medium text-graphite mb-1">{item.name}</div>
                                                <div className="text-xs text-muted-grey">{item.measurement}</div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-2xl font-bold text-bronze">{item.target}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="bg-graphite text-white rounded-2xl p-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                        <div className="md:col-span-2">
                            <h3 className="text-2xl font-bold mb-4">Measurement Cadence</h3>
                            <p className="text-white/70 leading-relaxed">
                                Weekly dashboards for operational metrics, monthly reviews for customer metrics, and quarterly strategic assessments for business impact. Real-time alerts for any metric deviation beyond 5%.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-6 text-center">
                            <div>
                                <TrendingUp className="w-6 h-6 mx-auto mb-2 text-bronze" />
                                <div className="text-xs text-white/60">Real-time</div>
                            </div>
                            <div>
                                <Target className="w-6 h-6 mx-auto mb-2 text-sage" />
                                <div className="text-xs text-white/60">Weekly</div>
                            </div>
                            <div>
                                <BarChart2 className="w-6 h-6 mx-auto mb-2 text-amber-400" />
                                <div className="text-xs text-white/60">Monthly</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SuccessMetrics;
