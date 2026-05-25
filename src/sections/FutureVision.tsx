import React from 'react';
import { Wifi, ShoppingCart, Share2, Globe, ShoppingBag, Sparkles } from 'lucide-react';

const FutureVision: React.FC = () => {
    const futureCapabilities = [
        {
            icon: Wifi,
            title: 'Voice-Enabled Shopping',
            description: 'Natural language interface for hands-free style recommendations',
            timeframe: 'Year 2',
        },
        {
            icon: ShoppingCart,
            title: 'Smart Home Integration',
            description: 'Sync with smart mirrors and closets for wardrobe management',
            timeframe: 'Year 3',
        },
        {
            icon: Share2,
            title: 'Social Fashion AI',
            description: 'Community-driven style matching and outfit sharing',
            timeframe: 'Year 2',
        },
        {
            icon: Globe,
            title: 'Global Fit Standards',
            description: 'Cross-brand and cross-platform size interoperability',
            timeframe: 'Year 3',
        },
        {
            icon: ShoppingBag,
            title: 'Marketplace API',
            description: 'License technology to other fashion platforms',
            timeframe: 'Year 4',
        },
        {
            icon: Sparkles,
            title: 'AI Stylist Persona',
            description: 'Conversational personal stylist with memory and context',
            timeframe: 'Year 3',
        },
    ];

    return (
        <section className="py-24 px-8 md:px-16 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <span className="caption-text text-bronze mb-6 block">SECTION 18</span>
                <h2 className="section-title text-graphite mb-12">
                    Future Vision
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
                    <div>
                        <p className="body-text text-graphite mb-12">
                            The Digital Style Intelligence System is not an end state. It&apos;s a platform foundation that unlocks a universe of possibilities for transforming how Indians shop for fashion.
                        </p>

                        <div className="bg-graphite text-white rounded-2xl p-10">
                            <div className="text-xl font-light italic leading-relaxed mb-6">
                                &ldquo;We&apos;re not building a feature. We&apos;re building the intelligence layer that will define fashion commerce for the next decade.&rdquo;
                            </div>
                            <div className="w-16 h-0.5 bg-bronze" />
                        </div>
                    </div>

                    <div>
                        <h3 className="subsection-title text-graphite mb-8">
                            Platform Evolution Roadmap
                        </h3>

                        <div className="relative pl-8">
                            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-light-grey" />

                            <div className="space-y-8">
                                {futureCapabilities.map((cap, idx) => {
                                    const Icon = cap.icon;
                                    return (
                                        <div key={idx} className="relative">
                                            <div className="absolute -left-8 top-4 w-3 h-3 rounded-full bg-sage border-4 border-warm-white" />
                                            <div className="bg-warm-white rounded-lg p-6">
                                                <div className="flex items-start gap-6">
                                                    <div className="w-12 h-12 rounded-lg bg-bronze/10 flex items-center justify-center flex-shrink-0">
                                                        <Icon className="w-5 h-5 text-bronze" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="text-base font-semibold text-graphite mb-1">{cap.title}</h4>
                                                        <p className="text-xs text-muted-grey leading-relaxed">{cap.description}</p>
                                                        <div className="mt-2 text-xs font-medium text-sage">{cap.timeframe}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-warm-white rounded-2xl p-12">
                    <h3 className="subsection-title text-graphite mb-8 text-center">
                        Strategic Positioning: 5-Year Horizon
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg p-8 text-center">
                            <div className="text-5xl font-bold text-bronze mb-4">Year 1</div>
                            <div className="text-sm font-medium text-graphite mb-2">Foundation</div>
                            <p className="text-xs text-muted-grey">
                                Fit intelligence as core differentiator, 30% return rate reduction
                            </p>
                        </div>

                        <div className="bg-white rounded-lg p-8 text-center">
                            <div className="text-5xl font-bold text-muted-grey mb-4">Year 3</div>
                            <div className="text-sm font-medium text-graphite mb-2">Ecosystem</div>
                            <p className="text-xs text-muted-grey">
                                Full style intelligence suite, AI stylist, social commerce
                            </p>
                        </div>

                        <div className="bg-white rounded-lg p-8 text-center">
                            <div className="text-5xl font-bold text-muted-grey mb-4">Year 5</div>
                            <div className="text-sm font-medium text-graphite mb-2">Platform</div>
                            <p className="text-xs text-muted-grey">
                                Industry standard for fashion intelligence, API licensing
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FutureVision;
