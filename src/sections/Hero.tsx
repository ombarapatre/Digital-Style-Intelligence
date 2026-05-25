import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center relative px-8 md:px-16 lg:px-24">
            <div className="max-w-6xl">
                <div className="mb-6">
                    <span className="caption-text text-bronze tracking-widest">
                        PRODUCT STRATEGY CASE STUDY
                    </span>
                </div>

                <h1 className="editorial-title text-graphite mb-8">
                    Digital Style
                    <br />
                    Intelligence
                </h1>

                {/* Subheading + Divider */}
                <div className="flex items-start gap-12 mb-12">
                    <div className="w-0.5 h-32 bg-bronze mt-2" />

                    <div className="flex-1 max-w-5xl">
                        <p className="text-2xl md:text-3xl text-muted-grey leading-[1.35] font-light tracking-tight">
                            Reducing fashion e-commerce return inefficiencies through
                            <span className="text-graphite font-medium"> identity-based personalization</span> and
                            <span className="text-graphite font-medium"> personalized style matching</span>
                        </p>

                        {/* Author Block */}
                        <div className="mt-8">
                            <h3 className="text-3xl text-graphite font-medium tracking-tight mb-3">
                                Om Barapatre
                            </h3>

                            <span className="text-sm uppercase tracking-[0.25em] text-muted-grey font-light">
                                Product Strategy · Systems Thinking
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-8 text-sm text-muted-grey">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-bronze" />
                        <span>Platforms: Myntra, AJIO</span>
                    </div>

                    <div className="w-px h-4 bg-medium-grey" />
                    <span>Timeline: 12-week strategy sprint</span>
                </div>
            </div>


        </section>
    );
};

export default Hero;
