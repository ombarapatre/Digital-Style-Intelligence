import React from 'react';
import { MetricCard } from '../components/MetricCard';

interface CostBreakdownItem {
    label: string;
    value: string;
    description: string;
}

const ReturnRateProblem: React.FC = () => {
    const costBreakdown: CostBreakdownItem[] = [
        {
            label: 'Reverse Logistics',
            value: 'INR 120',
            description: 'Per return pickup and processing',
        },
        {
            label: 'Quality Check',
            value: 'INR 45',
            description: 'Inspection and repackaging',
        },
        {
            label: 'Inventory Loss',
            value: 'INR 85',
            description: 'Depreciation and markdowns',
        },
        {
            label: 'Customer Support',
            value: 'INR 25',
            description: 'Return processing overhead',
        },
    ];

    return (
        <section className="py-24 px-8 md:px-16 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <span className="caption-text text-bronze mb-6 block">SECTION 02</span>
                <h2 className="section-title text-graphite mb-12">
                    The Return Rate Problem
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
                    <div>
                        <p className="body-text text-graphite mb-8">
                            Every return transaction costs approximately <span className="font-semibold text-bronze">INR 275 per order</span>. For a platform processing 50 million orders monthly with a 35% return rate, that translates to catastrophic losses.
                        </p>

                        <div className="space-y-6">
                            {costBreakdown.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-6">
                                    <div className="w-32 text-right">
                                        <div className="text-2xl font-bold text-graphite">{item.value}</div>
                                    </div>
                                    <div className="flex-1 border-l-2 border-light-grey pl-6 py-2">
                                        <div className="font-medium text-graphite">{item.label}</div>
                                        <div className="text-sm text-muted-grey">{item.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12 pt-8 border-t border-light-grey">
                            <div className="flex items-center gap-4">
                                <div className="text-5xl font-bold text-bronze">INR 275</div>
                                <div className="text-lg text-muted-grey">per return</div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-warm-white rounded-2xl p-12">
                        <h3 className="subsection-title text-graphite mb-8">
                            Monthly Impact Calculation
                        </h3>

                        <div className="space-y-8">
                            <div className="flex justify-between items-center pb-6 border-b border-light-grey">
                                <span className="text-lg text-muted-grey">Monthly Orders</span>
                                <span className="text-3xl font-bold text-graphite">50M</span>
                            </div>

                            <div className="flex justify-between items-center pb-6 border-b border-light-grey">
                                <span className="text-lg text-muted-grey">Return Rate</span>
                                <span className="text-3xl font-bold text-bronze">35%</span>
                            </div>

                            <div className="flex justify-between items-center pb-6 border-b border-light-grey">
                                <span className="text-lg text-muted-grey">Total Returns</span>
                                <span className="text-3xl font-bold text-graphite">17.5M</span>
                            </div>

                            <div className="flex justify-between items-center pt-6">
                                <span className="text-xl font-semibold text-graphite">Monthly Loss</span>
                                <span className="text-4xl font-bold text-bronze">INR 481 Cr</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-warm-white rounded-lg p-8">
                        <div className="text-xs font-medium text-muted-grey uppercase tracking-wide mb-4">
                            Operational Impact
                        </div>
                        <div className="text-4xl font-bold text-graphite mb-2">3.5x</div>
                        <div className="text-sm text-muted-grey">more warehouse capacity needed for returns</div>
                    </div>

                    <div className="bg-warm-white rounded-lg p-8">
                        <div className="text-xs font-medium text-muted-grey uppercase tracking-wide mb-4">
                            Environmental Impact
                        </div>
                        <div className="text-4xl font-bold text-graphite mb-2">12K</div>
                        <div className="text-sm text-muted-grey">tonnes CO2 from reverse logistics monthly</div>
                    </div>

                    <div className="bg-warm-white rounded-lg p-8">
                        <div className="text-xs font-medium text-muted-grey uppercase tracking-wide mb-4">
                            Customer Lifetime Value
                        </div>
                        <div className="text-4xl font-bold text-bronze mb-2">-22%</div>
                        <div className="text-sm text-muted-grey">reduction for serial returners</div>
                    </div>

                    <div className="bg-warm-white rounded-lg p-8">
                        <div className="text-xs font-medium text-muted-grey uppercase tracking-wide mb-4">
                            Brand Trust
                        </div>
                        <div className="text-4xl font-bold text-graphite mb-2">34%</div>
                        <div className="text-sm text-muted-grey">customers cite returns as trust factor</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReturnRateProblem;
