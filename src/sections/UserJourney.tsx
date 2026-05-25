import React from 'react';
import { ChevronRight, AlertCircle, CheckCircle, X } from 'lucide-react';

interface JourneyStep {
    phase: string;
    action: string;
    painPoint?: string;
    opportunity?: string;
    emotion: 'positive' | 'negative' | 'neutral';
}

const UserJourney: React.FC = () => {
    const currentJourney: JourneyStep[] = [
        {
            phase: 'Discovery',
            action: 'Customer browses products',
            emotion: 'neutral',
            opportunity: 'Personalized style recommendations',
        },
        {
            phase: 'Evaluation',
            action: 'Views size chart and product images',
            painPoint: 'Generic sizing, no body context',
            emotion: 'negative',
            opportunity: 'Fit prediction + visualization',
        },
        {
            phase: 'Decision',
            action: 'Adds multiple sizes to cart',
            painPoint: 'Uncertainty leads to bracket purchasing',
            emotion: 'negative',
            opportunity: 'Size confidence score',
        },
        {
            phase: 'Purchase',
            action: 'Completes transaction',
            emotion: 'neutral',
        },
        {
            phase: 'Delivery',
            action: 'Receives and tries products',
            painPoint: 'Size mismatch, style disappointment',
            emotion: 'negative',
            opportunity: 'Proactive follow-up',
        },
        {
            phase: 'Return',
            action: 'Initiates return for non-fitting items',
            painPoint: '3-5 day return process',
            emotion: 'negative',
            opportunity: 'Return prediction + intervention',
        },
    ];

    const futureJourney: JourneyStep[] = [
        {
            phase: 'Discovery',
            action: 'Customer sees personalized style feed',
            emotion: 'positive',
        },
        {
            phase: 'Profile Setup',
            action: 'Quick body measurement via AR',
            painPoint: undefined,
            emotion: 'positive',
        },
        {
            phase: 'Evaluation',
            action: 'Views products with fit score and style match',
            emotion: 'positive',
        },
        {
            phase: 'Decision',
            action: 'Selects recommended size with high confidence',
            emotion: 'positive',
        },
        {
            phase: 'Purchase',
            action: 'Single size purchase with certainty',
            emotion: 'positive',
        },
        {
            phase: 'Delivery',
            action: 'Receives perfectly fitting product',
            emotion: 'positive',
        },
    ];

    return (
        <section className="py-24 px-8 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <span className="caption-text text-bronze mb-6 block">SECTION 07</span>
                <h2 className="section-title text-graphite mb-12">
                    User Journey Mapping
                </h2>

                <p className="body-text text-graphite mb-16 max-w-3xl">
                    Mapping the current versus future state reveals where strategic intervention can transform the customer experience and reduce return rates.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-lg font-semibold text-muted-grey mb-8 flex items-center gap-3">
                            <AlertCircle className="w-5 h-5 text-graphite" />
                            Current State
                        </h3>

                        <div className="space-y-4">
                            {currentJourney.map((step, idx) => (
                                <div key={idx} className="flex items-start gap-6">
                                    <div className="flex flex-col items-center">
                                        <div
                                            className={`w-10 h-10 rounded-full flex items-center justify-center ${step.emotion === 'negative'
                                                ? 'bg-graphite text-white'
                                                : step.emotion === 'positive'
                                                    ? 'bg-sage text-white'
                                                    : 'bg-light-grey text-graphite'
                                                }`}
                                        >
                                            {step.emotion === 'negative' ? (
                                                <X className="w-4 h-4" />
                                            ) : step.emotion === 'positive' ? (
                                                <CheckCircle className="w-4 h-4" />
                                            ) : (
                                                <span className="text-sm font-bold">{idx + 1}</span>
                                            )}
                                        </div>
                                        {idx < currentJourney.length - 1 && (
                                            <div className="w-0.5 h-12 bg-light-grey" />
                                        )}
                                    </div>

                                    <div className="flex-1 pb-12">
                                        <div className="text-xs font-semibold text-muted-grey uppercase tracking-wide mb-1">
                                            {step.phase}
                                        </div>
                                        <div className="text-base font-medium text-graphite mb-2">
                                            {step.action}
                                        </div>
                                        {step.painPoint && (
                                            <div className="text-sm text-graphite bg-warm-white px-3 py-1.5 rounded inline-block">
                                                {step.painPoint}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-muted-grey mb-8 flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-sage" />
                            Future State
                        </h3>

                        <div className="space-y-4">
                            {futureJourney.map((step, idx) => (
                                <div key={idx} className="flex items-start gap-6">
                                    <div className="flex flex-col items-center">
                                        <div className="w-10 h-10 rounded-full bg-sage text-white flex items-center justify-center">
                                            <CheckCircle className="w-4 h-4" />
                                        </div>
                                        {idx < futureJourney.length - 1 && (
                                            <div className="w-0.5 h-12 bg-sage" />
                                        )}
                                    </div>

                                    <div className="flex-1 pb-12">
                                        <div className="text-xs font-semibold text-sage uppercase tracking-wide mb-1">
                                            {step.phase}
                                        </div>
                                        <div className="text-base font-medium text-graphite mb-2">
                                            {step.action}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserJourney;
