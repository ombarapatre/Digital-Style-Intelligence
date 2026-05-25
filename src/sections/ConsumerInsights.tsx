import React from 'react';
import { BarChart } from '../components/BarChart';

const ConsumerInsights: React.FC = () => {
    const returnReasons = [
        { label: 'Fit Issues', value: 45, color: '#A67C52' },
        { label: 'Quality Mismatch', value: 25, color: '#C7C7CC' },
        { label: 'Style Dissatisfaction', value: 18, color: '#C7C7CC' },
        { label: 'Wrong Product', value: 7, color: '#C7C7CC' },
        { label: 'Other', value: 5, color: '#C7C7CC' },
    ];

    const behaviorInsights = [
        {
            metric: '67%',
            description: 'of customers buy multiple sizes of the same product with intent to return',
        },
        {
            metric: '2.8x',
            description: 'higher return rate for first-time buyers vs repeat customers',
        },
        {
            metric: '42%',
            description: 'of returns happen within 48 hours of delivery',
        },
        {
            metric: '3.2',
            description: 'average items tried per successful purchase',
        },
    ];

    return (
        <section className="py-24 px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <span className="caption-text text-bronze mb-6 block">SECTION 03</span>
                <h2 className="section-title text-graphite mb-12">
                    Consumer Behavior Insights
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
                    <div>
                        <p className="body-text text-graphite mb-12">
                            Understanding why customers return products is critical. Our research reveals that fit issues dominate, but deeper behavioral patterns show systematic problems in how customers make purchase decisions.
                        </p>

                        <h3 className="text-xl font-semibold text-graphite mb-8">
                            Primary Return Reasons
                        </h3>

                        <BarChart data={returnReasons} horizontal unit="%" />
                    </div>

                    <div className="bg-white rounded-2xl p-12">
                        <h3 className="text-xl font-semibold text-graphite mb-8">
                            Behavioral Patterns
                        </h3>

                        <div className="space-y-8">
                            {behaviorInsights.map((insight, idx) => (
                                <div key={idx} className="flex items-start gap-6">
                                    <div className="text-4xl font-bold text-bronze flex-shrink-0">
                                        {insight.metric}
                                    </div>
                                    <p className="text-muted-grey leading-relaxed pt-2">
                                        {insight.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-white border border-light-grey rounded-2xl p-12">
                    <h3 className="subsection-title text-graphite mb-8">
                        The &ldquo;Bracket Purchasing&rdquo; Phenomenon
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div>
                            <p className="text-lg text-muted-grey leading-relaxed mb-6">
                                Customers buy multiple sizes of the same product, intending to return those that don&apos;t fit. This behavior, while rational from a customer perspective, creates massive inefficiencies.
                            </p>
                        </div>

                        <div className="bg-warm-white rounded-lg p-8">
                            <div className="text-xs font-medium text-muted-grey uppercase tracking-wide mb-4">
                                Average Basket Size
                            </div>
                            <div className="text-4xl font-bold text-graphite mb-2">3.7 items</div>
                            <div className="text-sm text-muted-grey">vs. intended purchase of 2.1 items</div>
                        </div>

                        <div className="bg-warm-white rounded-lg p-8">
                            <div className="text-xs font-medium text-muted-grey uppercase tracking-wide mb-4">
                                Return Intent at Purchase
                            </div>
                            <div className="text-4xl font-bold text-bronze mb-2">52%</div>
                            <div className="text-sm text-muted-grey">admit pre-planned returns</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConsumerInsights;
