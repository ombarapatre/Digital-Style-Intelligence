import React from 'react';
import { Layers, Target, Zap, Shield } from 'lucide-react';

const ProductVision: React.FC = () => {
    const pillars = [
        {
            icon: Target,
            title: 'Fit Intelligence',
            description: 'AI-powered fit prediction based on body measurements, brand-specific sizing, and fabric properties',
        },
        {
            icon: Layers,
            title: 'Style Intelligence',
            description: 'Personalized style matching that considers body type, occasion, and aesthetic preferences',
        },
        {
            icon: Zap,
            title: 'Visual Intelligence',
            description: 'AR-powered visualization showing how garments drape and fit on the customer\'s body',
        },
        {
            icon: Shield,
            title: 'Confidence Engine',
            description: 'Purchase confidence scoring that proactively identifies potential return issues',
        },
    ];

    return (
        <section className="py-24 px-8 md:px-16 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <span className="caption-text text-bronze mb-6 block">SECTION 08</span>
                <h2 className="section-title text-graphite mb-12">
                    Product Vision
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
                    <div>
                        <p className="body-text text-graphite mb-12">
                            The Digital Style Intelligence System is not a feature. It&apos;s a platform layer that fundamentally transforms how customers interact with fashion e-commerce.
                        </p>

                        <div className="bg-graphite text-white rounded-2xl p-12">
                            <div className="text-xl font-light leading-relaxed italic">
                                &ldquo;Imagine if every customer could try on every product virtually, with perfect fit prediction and style matching, before making a purchase. That&apos;s the vision.&rdquo;
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="subsection-title text-graphite mb-8">
                            Four Strategic Pillars
                        </h3>

                        <div className="space-y-6">
                            {pillars.map((pillar, idx) => {
                                const Icon = pillar.icon;
                                return (
                                    <div key={idx} className="flex items-start gap-6 p-6 bg-warm-white rounded-lg">
                                        <div className="w-12 h-12 rounded-lg bg-bronze text-white flex items-center justify-center flex-shrink-0">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-graphite mb-2">
                                                {pillar.title}
                                            </h4>
                                            <p className="text-sm text-muted-grey leading-relaxed">
                                                {pillar.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="bg-warm-white rounded-2xl p-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        <div>
                            <div className="text-4xl font-bold text-bronze mb-4">Phase 1</div>
                            <div className="text-lg font-semibold text-graphite mb-2">Foundation</div>
                            <p className="text-sm text-muted-grey">
                                Body measurement capture, basic fit prediction, and size recommendation engine
                            </p>
                        </div>

                        <div>
                            <div className="text-4xl font-bold text-muted-grey mb-4">Phase 2</div>
                            <div className="text-lg font-semibold text-graphite mb-2">Intelligence</div>
                            <p className="text-sm text-muted-grey">
                                Style compatibility scoring, occasion-based recommendations, and personal aesthetic profiling
                            </p>
                        </div>

                        <div>
                            <div className="text-4xl font-bold text-muted-grey mb-4">Phase 3</div>
                            <div className="text-lg font-semibold text-graphite mb-2">Visualization</div>
                            <p className="text-sm text-muted-grey">
                                AR try-on capabilities, 3D body mapping, and dynamic fit visualization
                            </p>
                        </div>

                        <div>
                            <div className="text-4xl font-bold text-muted-grey mb-4">Phase 4</div>
                            <div className="text-lg font-semibold text-graphite mb-2">Optimization</div>
                            <p className="text-sm text-muted-grey">
                                Predictive return prevention, dynamic pricing, and inventory optimization
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductVision;
