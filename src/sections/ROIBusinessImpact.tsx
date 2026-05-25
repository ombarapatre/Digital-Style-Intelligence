import React from 'react';
import { TrendingUp, DollarSign, Package, Users } from 'lucide-react';

const ROIBusinessImpact: React.FC = () => {
    const roiMetrics = [
        {
            icon: DollarSign,
            category: 'Cost Savings',
            current: 'INR 5,772 Cr',
            projected: 'INR 3,463 Cr',
            savings: 'INR 2,309 Cr',
            description: 'Annual reduction in return-related costs',
        },
        {
            icon: Package,
            category: 'Operational Efficiency',
            current: '35%',
            projected: '21%',
            improvement: '40% reduction',
            description: 'Return rate improvement',
        },
        {
            icon: Users,
            category: 'Customer Lifetime Value',
            current: 'INR 8,500',
            projected: 'INR 11,050',
            improvement: '30% increase',
            description: 'Average CLV growth',
        },
        {
            icon: TrendingUp,
            category: 'Revenue Impact',
            current: '3.7 items',
            projected: '2.8 items',
            improvement: 'Higher intent',
            description: 'Basket quality improvement',
        },
    ];

    const investmentBreakdown = [
        { item: 'Development Team', year1: 'INR 4.2 Cr', year2: 'INR 2.8 Cr', year3: 'INR 2.1 Cr' },
        { item: 'Infrastructure', year1: 'INR 1.5 Cr', year2: 'INR 2.0 Cr', year3: 'INR 2.5 Cr' },
        { item: 'Data & ML Services', year1: 'INR 1.8 Cr', year2: 'INR 1.5 Cr', year3: 'INR 1.2 Cr' },
        { item: 'Operations & Support', year1: 'INR 0.8 Cr', year2: 'INR 1.2 Cr', year3: 'INR 1.5 Cr' },
    ];

    return (
        <section className="py-24 px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <span className="caption-text text-bronze mb-6 block">SECTION 13</span>
                <h2 className="section-title text-graphite mb-12">
                    ROI & Business Impact
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
                    <div>
                        <p className="body-text text-graphite mb-12">
                            Conservative projections show a payback period of <span className="font-semibold text-bronze">8 months</span> with break-even achieved by month 10. The system generates positive ROI from month 1 due to immediate return rate improvements.
                        </p>

                        <div className="space-y-6">
                            {roiMetrics.map((metric, idx) => {
                                const Icon = metric.icon;
                                return (
                                    <div key={idx} className="bg-white border border-light-grey rounded-lg p-6">
                                        <div className="flex items-start gap-6">
                                            <div className="w-14 h-14 rounded-lg bg-bronze/10 flex items-center justify-center flex-shrink-0">
                                                <Icon className="w-6 h-6 text-bronze" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="text-xs font-medium text-muted-grey uppercase tracking-wide mb-2">
                                                    {metric.category}
                                                </div>
                                                <div className="flex items-end gap-6">
                                                    <div>
                                                        <div className="text-xs text-muted-grey mb-1">Current</div>
                                                        <div className="text-xl font-bold text-graphite">{metric.current}</div>
                                                    </div>
                                                    <div className="text-muted-grey mb-2">
                                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <div className="text-xs text-muted-grey mb-1">Projected</div>
                                                        <div className="text-xl font-bold text-sage">{metric.projected}</div>
                                                    </div>
                                                    <div className="flex-1 text-right">
                                                        <div className="text-sm font-semibold text-bronze">{metric.improvement}</div>
                                                    </div>
                                                </div>
                                                <div className="text-sm text-muted-grey mt-3">{metric.description}</div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <div className="bg-white border border-light-grey rounded-2xl p-10 mb-8">
                            <h3 className="subsection-title text-graphite mb-8 text-center">
                                Three-Year ROI Projection
                            </h3>

                            <div className="space-y-8 mb-8">
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div>
                                        <div className="text-sm text-muted-grey mb-2">Year 1</div>
                                        <div className="text-3xl font-bold text-bronze">185%</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-muted-grey mb-2">Year 2</div>
                                        <div className="text-3xl font-bold text-bronze">320%</div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-muted-grey mb-2">Year 3</div>
                                        <div className="text-3xl font-bold text-bronze">450%</div>
                                    </div>
                                </div>

                                <div className="h-40 bg-warm-white rounded-lg p-6 flex items-end justify-around">
                                    {[185, 320, 450].map((value, idx) => (
                                        <div key={idx} className="flex flex-col items-center">
                                            <div
                                                className="w-16 bg-bronze rounded-t transition-all"
                                                style={{ height: `${(value / 500) * 100}%` }}
                                            />
                                            <div className="mt-2 text-xs font-semibold text-graphite">Y{idx + 1}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-graphite text-white rounded-lg p-8">
                            <div className="text-center">
                                <div className="text-xs font-medium text-white/60 uppercase tracking-wide mb-4">
                                    Total 3-Year Net Savings
                                </div>
                                <div className="text-5xl font-bold mb-4">INR 6,927 Cr</div>
                                <div className="text-sm text-bronze">Total investment: INR 14.4 Cr</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-warm-white rounded-2xl p-12">
                    <h3 className="subsection-title text-graphite mb-8">
                        Investment Breakdown
                    </h3>

                    <div className="grid grid-cols-4 gap-6 text-xs font-semibold text-muted-grey uppercase tracking-wide mb-4">
                        <div>Investment Area</div>
                        <div>Year 1</div>
                        <div>Year 2</div>
                        <div>Year 3</div>
                    </div>

                    <div className="space-y-4">
                        {investmentBreakdown.map((item, idx) => (
                            <div key={idx} className="grid grid-cols-4 gap-6 items-center py-3 border-t border-light-grey">
                                <div className="text-sm font-medium text-graphite">{item.item}</div>
                                <div className="text-sm text-muted-grey">{item.year1}</div>
                                <div className="text-sm text-muted-grey">{item.year2}</div>
                                <div className="text-sm text-muted-grey">{item.year3}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ROIBusinessImpact;

