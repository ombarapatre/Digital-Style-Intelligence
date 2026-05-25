import React from 'react';
import { QuadrantDiagram } from '../components/QuadrantDiagram';

const CoreStrategicInsight: React.FC = () => {
    return (
        <section className="py-24 px-8 md:px-16 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <span className="caption-text text-bronze mb-6 block">SECTION 04</span>
                <h2 className="section-title text-graphite mb-12">
                    Core Strategic Insight
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
                    <div>
                        <p className="body-text text-graphite mb-8">
                            The fundamental insight: <span className="font-semibold text-bronze">customers don&apos;t return products because they changed their mind. They return because they made the wrong decision in the first place.</span>
                        </p>

                        <p className="text-lg text-muted-grey leading-relaxed mb-12">
                            Current product discovery experiences force customers to make decisions based on incomplete information. Size charts are generic, fit varies by brand, and style compatibility is subjective.
                        </p>

                        <div className="bg-warm-white rounded-lg p-8 border border-light-grey">
                            <div className="flex items-start gap-4">
                                <div className="w-2 h-2 rounded-full bg-bronze mt-3" />
                                <div>
                                    <h4 className="text-lg font-semibold text-graphite mb-3">
                                        The Gap
                                    </h4>
                                    <p className="text-base text-muted-grey leading-relaxed">
                                        Bridging the gap between online product presentation and physical product reality. We&apos;re not selling products; we&apos;re selling confidence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <QuadrantDiagram
                            title="Strategic Positioning Matrix"
                            quadrants={[
                                {
                                    position: 'top-left',
                                    label: 'High Confidence, Low Returns',
                                    description: 'Target State: Customers buy with certainty',
                                    accent: true,
                                },
                                {
                                    position: 'top-right',
                                    label: 'High Confidence, High Returns',
                                    description: 'Rare: Confident but wrong expectations',
                                },
                                {
                                    position: 'bottom-left',
                                    label: 'Low Confidence, Low Returns',
                                    description: 'Conservative buying: Known brands, repeat purchases',
                                },
                                {
                                    position: 'bottom-right',
                                    label: 'Low Confidence, High Returns',
                                    description: 'Current State: Trial and error purchasing',
                                },
                            ]}
                            xAxis={{ left: 'Low Returns', right: 'High Returns' }}
                            yAxis={{ top: 'High Confidence', bottom: 'Low Confidence' }}
                        />
                    </div>
                </div>

                <div className="bg-graphite text-white rounded-2xl p-12 md:p-16">
                    <div className="max-w-4xl">
                        <span className="text-bronze text-sm font-medium uppercase tracking-widest mb-6 block">
                            Strategic Hypothesis
                        </span>
                        <p className="text-2xl md:text-3xl font-light leading-relaxed">
                            &ldquo;If we can increase customer confidence at the point of purchase through better fit prediction and style matching, we can reduce returns by 30-40% while increasing purchase frequency and basket size.&rdquo;
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoreStrategicInsight;
