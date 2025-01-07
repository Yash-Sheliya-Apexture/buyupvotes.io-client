import React from "react";
import GradientHeading from "../GradientHeading";
import { Link } from "react-router-dom";

const WhyChooseUsSection = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto">
                {/* Top Section */}
                <div className="grid grid-cols-1 gap-8 mb-10 md:grid-cols-2">
                    {/* Left Side */}
                    <div className="lg:max-w-md">
                        <GradientHeading
                            tag="h3"
                            beforeText="Boost your online presence "
                            gradientText="with ease!"
                            beforeSpanClassName="font-bold"
                            textSize="text-5xl md:text-7xl lg:text-6xl"
                            className="mb-10"
                        />
                    </div>

                    {/* Right Side */}
                    <div className="content-wrap">
                        <p className="mb-6 text-xl text-gray-700">
                            Whether you're looking to rank higher on Reddit, Quora, YouTube, or other platforms, our upvote services are here to help you shine. With real engagement from verified users, we ensure your content gets the visibility it deserves.
                        </p>
                        <Link to="/signup" className="inline-flex items-center gap-3 px-8 py-2 text-lg font-medium text-white transition-colors duration-300 border rounded-lg bg-main-color hover:bg-orange-600 border-main-color hover:border-orange-600">
                        Learn more
                        </Link>
                    </div>
                </div>

                {/* Cards Section */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {/* Card 1 */}
                    <div className="p-7 rounded-lg bg-[#ffeee5]">
                        <div className="flex items-center mb-4">
                            <span className="inline-flex items-center justify-center w-8 h-8 text-white rounded-full bg-main-color">
                                1
                            </span>
                            <h4 className="ml-3 text-xl font-semibold text-black">Instant Results</h4>
                        </div>
                        <p className="text-gray-600">
                        Watch your post rise in popularity within minutes.
                        </p>
                    </div>
                    {/* Card 2 */}
                    <div className="p-7 rounded-lg bg-[#ffeee5]">
                        <div className="flex items-center mb-4">
                            <span className="inline-flex items-center justify-center w-8 h-8 text-white rounded-full bg-main-color">
                                2
                            </span>
                            <h4 className="ml-3 text-xl font-semibold text-black">Safe & Secure</h4>
                        </div>
                        <p className="text-gray-600">
                        We use genuine accounts and avoid bots to keep your profile safe.
                        </p>
                    </div>
                    {/* Card 3 */}
                    <div className="p-7 rounded-lg bg-[#ffeee5]">
                        <div className="flex items-center mb-4">
                            <span className="inline-flex items-center justify-center w-8 h-8 text-white rounded-full bg-main-color">
                                3
                            </span>
                            <h4 className="ml-3 text-xl font-semibold text-black">Affordable Plans</h4>
                        </div>
                        <p className="text-gray-600">
                        Flexible pricing tailored to your needs, starting as low as $5.
                        </p>
                    </div>
                    {/* Card 4 */}
                    <div className="p-7 rounded-lg bg-[#ffeee5]">
                        <div className="flex items-center mb-4">
                            <span className="inline-flex items-center justify-center w-8 h-8 text-white rounded-full bg-main-color">
                                4
                            </span>
                            <h4 className="ml-3 text-xl font-semibold text-black">Global Reach</h4>
                        </div>
                        <p className="text-gray-600">
                        Target specific platforms or regions to maximize impact.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;