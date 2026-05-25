import React from 'react';
import { BarChart } from '../components/BarChart';
import { MetricCard } from '../components/MetricCard';

const IndustryAnalysis: React.FC = () => {
    const marketData = [
        { label: 'Fashion', value: 35 },
        { label: 'Electronics', value: 12 },
        { label: 'Home', value: 18 },
        { label: 'Beauty', value: 15 },
        { label: 'Global Fashion Avg', value: 25 },
    ];

    const platformData = [
        { label: 'Myntra', value: '190M+', sublabel: 'Monthly visits' },
        { label: 'AJIO', value: '85M+', sublabel: 'Monthly visits' },
        { label: 'Nykaa Fashion', value: '25M+', sublabel: 'Monthly visits' },
    ];

    return (
        <section className="py-24 px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    <div>
                        <span className="caption-text text-bronze mb-6 block">SECTION 01</span>
                        <h2 className="section-title text-graphite mb-12">
                            Industry & Market Analysis
                        </h2>

                        <div className="space-y-8 mb-12">
                            <p className="body-text text-graphite">
                                The Indian fashion e-commerce market is valued at <span className="font-semibold">INR 60,000 crores</span> with a CAGR of 25%. However, this growth is under threat from spiraling return rates.
                            </p>

                            <p className="text-lg text-muted-grey leading-relaxed">
                                Unlike electronics or home goods, fashion has unique challenges: subjective sizing, fit variations across brands, and the critical role of fabric feel and body type compatibility.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-6">
                            {platformData.map((platform, idx) => (
                                <div key={idx} className="bg-white border border-light-grey rounded-lg p-6">
                                    <div className="text-3xl font-bold text-graphite mb-2">
                                        {platform.value}
                                    </div>
                                    <div className="text-sm text-muted-grey">{platform.label}</div>
                                    <div className="text-xs text-bronze mt-2">{platform.sublabel}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="subsection-title text-graphite mb-8">
                            Return Rates by Category
                        </h3>

                        <BarChart data={marketData} horizontal unit="%" />

                        <div className="mt-12 p-6 bg-white border border-light-grey rounded-lg">
                            <div className="flex items-start gap-4">
                                <div className="w-1 h-full bg-bronze rounded-full" style={{ height: '100%' }} />
                                <div>
                                    <h4 className="font-semibold text-graphite mb-2">Key Insight</h4>
                                    <p className="text-sm text-muted-grey leading-relaxed">
                                        Fashion return rates in India are 10% higher than global averages, primarily driven by fit issues (45%), quality mismatch (25%), and style dissatisfaction (18%).
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IndustryAnalysis;
