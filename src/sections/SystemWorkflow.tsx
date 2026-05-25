import React from 'react';
import { FlowDiagram } from '../components/FlowDiagram';

const SystemWorkflow: React.FC = () => {
    const customerFlow = [
        {
            title: 'Profile Creation',
            description: 'Customer creates body profile via AR measurement or manual input',
        },
        {
            title: 'Style Assessment',
            description: 'Quick quiz to understand aesthetic preferences and shopping behavior',
        },
        {
            title: 'Product Discovery',
            description: 'Personalized feed with fit scores and style match percentages',
        },
        {
            title: 'Evaluation',
            description: 'Detailed fit analysis, visualization, and confidence score',
        },
        {
            title: 'Purchase',
            description: 'High-confidence purchase with predicted satisfaction',
        },
        {
            title: 'Feedback Loop',
            description: 'Post-delivery confirmation improves future predictions',
        },
    ];

    const dataFlow = [
        { step: 'Body Measurement Data', target: 'Anonymized body profile database' },
        { step: 'Brand Sizing Intelligence', target: 'Brand-specific fit models' },
        { step: 'Customer Preferences', target: 'Individual recommendation model' },
        { step: 'Return History Analysis', target: 'Return prediction model' },
        { step: 'Purchase Behavior', target: 'Confidence scoring algorithm' },
    ];

    return (
        <section className="py-24 px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <span className="caption-text text-bronze mb-6 block">SECTION 11</span>
                <h2 className="section-title text-graphite mb-12">
                    System Workflow
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
                    <div>
                        <h3 className="subsection-title text-graphite mb-8">
                            Customer Experience Flow
                        </h3>
                        <FlowDiagram steps={customerFlow} layout="vertical" numbered />
                    </div>

                    <div>
                        <h3 className="subsection-title text-graphite mb-8">
                            Data Architecture Flow
                        </h3>

                        <div className="space-y-6">
                            {dataFlow.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start gap-6 p-6 bg-white border border-light-grey rounded-lg"
                                >
                                    <div className="w-10 h-10 rounded-full bg-sage text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                                        {idx + 1}
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm font-medium text-muted-grey mb-1">{item.step}</div>
                                        <div className="text-base font-semibold text-graphite">{item.target}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-warm-white rounded-2xl p-12">
                    <h3 className="subsection-title text-graphite mb-8 text-center">
                        Integration Touchpoints
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="bg-white rounded-lg p-6 mb-4 border border-light-grey">
                                <div className="text-sm font-medium text-muted-grey mb-4">Onboarding</div>
                                <div className="space-y-2 text-xs text-graphite">
                                    <div>Registration flow</div>
                                    <div>Profile setup prompt</div>
                                    <div>First-time recommendation</div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="bg-white rounded-lg p-6 mb-4 border border-light-grey">
                                <div className="text-sm font-medium text-muted-grey mb-4">Product Pages</div>
                                <div className="space-y-2 text-xs text-graphite">
                                    <div>Fit score display</div>
                                    <div>Size recommendation</div>
                                    <div>Style match percentage</div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="bg-white rounded-lg p-6 mb-4 border border-light-grey">
                                <div className="text-sm font-medium text-muted-grey mb-4">Checkout</div>
                                <div className="space-y-2 text-xs text-graphite">
                                    <div>Confidence alert</div>
                                    <div>Return prediction warning</div>
                                    <div>Size confirmation</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SystemWorkflow;
