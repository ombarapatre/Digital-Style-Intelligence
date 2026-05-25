import React from 'react';
import { MetricCard } from '../components/MetricCard';

const ExecutiveSummary: React.FC = () => {
    return (
        <section className="py-24 px-8 md:px-16 lg:px-24 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
                    <div className="lg:col-span-1">
                        <span className="caption-text text-bronze mb-6 block">EXECUTIVE SUMMARY</span>
                        <h2 className="section-title text-graphite mb-8">
                            The Problem
                            <br />
                            Worth Solving
                        </h2>
                    </div>

                    <div className="lg:col-span-2">
                        <p className="body-text text-graphite mb-12">
                            Fashion e-commerce in India loses{' '}
                            <span className="font-semibold text-bronze">INR 4,000+ crores annually</span> to
                            product returns. For platforms like Myntra and AJIO, return rates hover between 25-40%
                            compared to global averages of 20-30%. This isn&apos;t just a logistics problem.
                            It&apos;s a product problem.
                        </p>

                        <p className="body-text text-muted-grey mb-16">
                            This case study proposes a Digital Style Intelligence System that transforms how
                            customers discover and select fashion products. By combining AI-powered fit
                            prediction, body measurement analysis, and personalized style recommendations, we can
                            reduce return rates by 30-40% while increasing customer confidence and purchase
                            frequency.
                        </p>

                        <div className="divider-thin mb-16" />

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <MetricCard value="35%" label="Current Return Rate" sublabel="Fashion category" />
                            <MetricCard value="INR 4,000+" label="Annual Loss" sublabel="Crores" accent="bronze" />
                            <MetricCard value="45%" label="Fit-related Returns" sublabel="Root cause" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExecutiveSummary;
